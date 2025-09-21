import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Title1",
      description: "description1 dfgjdngrignroig",
      completed: false,
      showDescription: false,
    },
    {
      id: 2,
      title: "Title2",
      description: "description2 dfgjdngrignroig",
      completed: false,
      showDescription: false,
    },
    {
      id: 3,
      title: "Title3",
      description: "description3 dfgjdngrignroig",
      completed: false,
      showDescription: false,
    },
  ]);

  // Toggle description dropdown
  const toggleDescription = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, showDescription: !todo.showDescription }
          : {...todo,showDescription: false}
      )
    );
  };

  // Toggle completed checkbox
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Dummy edit handler
  const editTodo = (id) => {
    console.log("Edit", id);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`p-3 border rounded mb-2 bg-gray-800 text-white ${todo.showDescription?'bg-gradient-to-tr to-blue-600':''}`}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDescription(todo.id)}>
            {/* Title + Arrow */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              
            >
              <span
                className={`transform transition-transform duration-300 ${
                  todo.showDescription ? "rotate-90" : "rotate-0"
                }`}
              >
                ▶
              </span>
              <h1
                className={`font-bold ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </h1>
            </div>

            {/* Right Side: Actions + Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-8 h-8 bg-green-500 checked:bg-green-700 border-none rounded cursor-pointer flex items-center justify-center"
              />
              <button
                onClick={() => editTodo(todo.id)}
                className="px-2 py-1 bg-blue-500 rounded w-8 h-8 flex items-center justify-center"
              >
                ✏️
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 bg-red-500 rounded w-8 h-8 flex items-center justify-center"
              >
                🗑️
              </button>
            </div>
          </div>

          {/* Animated Dropdown */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              todo.showDescription
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-300">📝 {todo.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
