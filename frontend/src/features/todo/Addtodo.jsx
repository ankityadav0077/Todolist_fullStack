import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import * as todoService from "../../services/todoService";

export default function Addtodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newTodo = await todoService.createTodo(title, description);
      dispatch(addTodo(newTodo));
      reset();
      setIsClicked(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to add todo");
      setLoading(false);
    }
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setLoading(false);
    setError(null);
  };

  return (
    <>
      {isClicked ? (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all animate-slideUp">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">✨</span>
                Create New Task
              </h2>
              <button
                onClick={() => {
                  setIsClicked(false);
                  reset();
                }}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                disabled={loading}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 flex items-start gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="E.g., Complete project documentation"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-gray-800 font-semibold placeholder:text-gray-400 placeholder:font-normal"
                  required
                  disabled={loading}
                />
              </div>

              {/* Description Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Add more details about your task..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition text-gray-700 placeholder:text-gray-400 resize-none"
                  rows="4"
                  required
                  disabled={loading}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <span>➕</span>
                      Add Task
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition disabled:opacity-50"
                  disabled={loading}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsClicked(true)}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <span className="text-xl">➕</span>
          Add New Task
        </button>
      )}
    </>
  );
}