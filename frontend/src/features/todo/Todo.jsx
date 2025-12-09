import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, updateTodo as updateTodoAction, removeTodo, setLoading, setError } from "./todoSlice";
import * as todoService from "../../services/todoService";

export default function Todo() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(state => state.todos);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Fetch todos on component mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        dispatch(setLoading(true));
        const fetchedTodos = await todoService.fetchTodos();
        dispatch(setTodos(fetchedTodos));
      } catch (err) {
        dispatch(setError(err.message || "Failed to fetch todos"));
      }
    };
    loadTodos();
  }, [dispatch]);

  // Toggle description dropdown
  const toggleDescription = async (id) => {
    const todo = todos.find(t => t._id === id);
    if (!todo) return;

    try {
      const updated = await todoService.updateTodo(id, {
        showDescription: !todo.showDescription
      });
      dispatch(updateTodoAction({
        ...updated,
        showDescription: !todo.showDescription
      }));
    } catch (err) {
      // Just toggle locally if backend doesn't support this field
      dispatch(updateTodoAction({
        ...todo,
        showDescription: !todo.showDescription
      }));
    }
  };

  // Toggle completed checkbox
  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    if (!todo) return;

    try {
      const updated = await todoService.updateTodo(id, {
        completed: !todo.completed
      });
      dispatch(updateTodoAction(updated));
    } catch (err) {
      dispatch(setError(err.message || "Failed to update todo"));
    }
  };

  // Edit todo
  const editTodo = (id) => {
    const todo = todos.find(t => t._id === id);
    if (!todo) return;

    setEditingId(id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  // Save edited todo
  const saveEdit = async () => {
    if (!editingId) return;

    try {
      const updated = await todoService.updateTodo(editingId, {
        title: editTitle,
        description: editDescription,
      });
      dispatch(updateTodoAction(updated));
      setEditingId(null);
      setEditTitle("");
      setEditDescription("");
    } catch (err) {
      dispatch(setError(err.message || "Failed to update todo"));
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      dispatch(removeTodo(id));
    } catch (err) {
      dispatch(setError(err.message || "Failed to delete todo"));
    }
  };

  if (loading && todos.length === 0) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
        <p className="font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center p-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
          <span className="text-4xl">📝</span>
        </div>
        <p className="text-gray-600 text-lg">No todos yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Edit Modal */}
      {editingId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">✏️</span>
              Edit Todo
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-gray-800 font-semibold"
                placeholder="Title"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-gray-700"
                rows="4"
                placeholder="Description"
              />
              <div className="flex gap-3 pt-2">
                <button
                  onClick={saveEdit}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Todo Cards */}
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${todo.completed
              ? 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50'
              : 'border-gray-200 hover:border-indigo-300'
            }`}
        >
          {/* Main Content */}
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              {/* Left: Arrow + Title */}
              <div className="flex items-start gap-3 flex-1 cursor-pointer" onClick={() => toggleDescription(todo._id)}>
                <span className={`text-indigo-500 transform transition-transform duration-300 mt-1 ${todo.showDescription ? "rotate-90" : "rotate-0"
                  }`}>
                  ▶
                </span>
                <div className="flex-1">
                  <h1 className={`font-bold text-lg ${todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                    }`}>
                    {todo.title}
                  </h1>
                  {todo.completed && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Completed ✓
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2">
                {/* Checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTodo(todo._id);
                  }}
                  className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition transform hover:scale-110 ${todo.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-500'
                    }`}
                >
                  {todo.completed && '✓'}
                </button>

                {/* Edit Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    editTodo(todo._id);
                  }}
                  className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  ✏️
                </button>

                {/* Delete Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo._id);
                  }}
                  className="w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  🗑️
                </button>
              </div>
            </div>

            {/* Animated Description Dropdown */}
            <div
              className={`transition-all duration-300 overflow-hidden ${todo.showDescription
                  ? "max-h-48 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-8 pr-4 py-3 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {todo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
