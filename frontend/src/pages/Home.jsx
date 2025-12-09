import { useDispatch, useSelector } from "react-redux";
import Todo from "../features/todo/Todo";
import Addtodo from "../features/todo/Addtodo";

export default function Home() {
  const isUserPresent = useSelector(state => state.auth.isUserPresent);
  const userName = useSelector(state => state.auth.userName);

  return (
    <div className="min-h-screen">
      {!isUserPresent ? (
        /* Landing Page for Non-Authenticated Users */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TaskFlow
                </span>{" "}
                ✨
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Organize your tasks, stay motivated, and achieve your goals with ease.
                Start your productivity journey today! 🚀
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-indigo-100">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Task Management</h3>
                <p className="text-gray-600">
                  Add, edit, and track tasks seamlessly to stay on top of your goals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Boost Productivity</h3>
                <p className="text-gray-600">
                  Break big goals into small tasks and feel the daily progress.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-pink-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Organized</h3>
                <p className="text-gray-600">
                  Keep everything in one place and never miss a deadline.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to get started? 🎯
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Sign up or log in to start organizing your tasks today!
              </p>
              <div className="flex gap-4 justify-center">
                <span className="text-white/80">👆 Get started using the buttons above</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Dashboard for Authenticated Users */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, {userName}! 👋
              </h1>
              <p className="text-white/90 text-lg">
                You're doing great! Keep up the momentum. 🚀
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Todos List - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span>📋</span>
                    Your Tasks
                  </h2>
                </div>
                <Todo />
              </div>
            </div>

            {/* Sidebar - Takes 1 column */}
            <div className="space-y-6">
              {/* Add Task Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-indigo-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>✨</span>
                  Quick Actions
                </h3>
                <Addtodo />
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  💡 Pro Tip
                </h3>
                <p className="text-gray-700 text-sm">
                  Break down large tasks into smaller, manageable steps to boost productivity!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
