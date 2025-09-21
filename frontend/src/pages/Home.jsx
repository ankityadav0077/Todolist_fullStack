// Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImg from "../assets/image.png"; // add your own image
import feature1 from "../assets/image.png";
import feature2 from "../assets/image.png";
import feature3 from "../assets/image.png";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../features/todo/Todo";
import Addtodo from "../features/todo/Addtodo";
export default function Home() {
  const dispatch = useDispatch();

  const isUserPresent = useSelector(state => state.auth.isUserPresent); // replace with real auth later

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 min-h-screen flex flex-col">
      {!isUserPresent ? (
        <>x
          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20">
            {/* Left text */}
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="text-indigo-600">ToDo Master</span> ✨
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                Organize your tasks, stay motivated, and achieve your goals
                with ease. Start your productivity journey today 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                {/* <Link
                  to="/login"
                  className="px-8 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-8 py-3 text-lg font-semibold bg-gray-200 text-gray-800 rounded-xl shadow-lg hover:bg-gray-300 transition"
                >
                  Register
                </Link> */}
              </div>
            </div>
            {/* Right image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={heroImg}
                alt="Productivity Illustration"
                className="w-3/4 md:w-full max-w-md"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="px-6 md:px-20 py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose <span className="text-indigo-600">ToDo Master?</span>
            </h2>
            <div className="grid gap-10 md:grid-cols-3 text-center">
              <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-indigo-50">
                <img src={feature1} alt="Task Management" className="mx-auto w-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Task Management</h3>
                <p className="text-gray-600">
                  Add, edit, and track tasks seamlessly to stay on top of your goals.
                </p>
              </div>
              <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-indigo-50">
                <img src={feature2} alt="Productivity Boost" className="mx-auto w-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
                <p className="text-gray-600">
                  Break big goals into small tasks and feel the daily progress.
                </p>
              </div>
              <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-indigo-50">
                <img src={feature3} alt="Stay Motivated" className="mx-auto w-20 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
                <p className="text-gray-600">
                  Daily quotes and progress tracking keep you inspired.
                </p>
              </div>
            </div>
          </section>

          {/* Motivational Quotes */}
         <section className="flex justify-center px-6 md:px-20 py-16">
  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl rounded-2xl p-10 max-w-4xl w-full text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 flex items-center justify-center gap-3">
      <span>💡 Stay Inspired</span>
    </h2>

    {/* Quote Grid */}
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {/* Quote 1 */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/921/921490.png"
          alt="Productivity Icon"
          className="w-16 h-16"
        />
        <p className="italic text-lg">“Productivity is not about being busy, but being effective.”</p>
      </div>

      {/* Quote 2 */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
          alt="Steps Icon"
          className="w-16 h-16"
        />
        <p className="italic text-lg">“Small steps every day lead to big results.”</p>
      </div>

      {/* Quote 3 */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Future Icon"
          className="w-16 h-16"
        />
        <p className="italic text-lg">“Your future depends on what you do today, not tomorrow.”</p>
      </div>
    </div>

    {/* Extra Motivation Section */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4">🚀 Why Use Our To-Do App?</h3>
      <ul className="grid md:grid-cols-2 gap-6 text-lg">
        <li className="bg-white text-indigo-700 p-4 rounded-xl shadow-md">✅ Stay organized and track tasks easily</li>
        <li className="bg-white text-indigo-700 p-4 rounded-xl shadow-md">✅ Boost productivity with daily goals</li>
        <li className="bg-white text-indigo-700 p-4 rounded-xl shadow-md">✅ Get motivated with inspiring quotes</li>
        <li className="bg-white text-indigo-700 p-4 rounded-xl shadow-md">✅ Simple, clean, and responsive design</li>
      </ul>
    </div>
  </div>
</section>

        </>
      ) : (
        <>
        <div className="flex flex-col md:flex-row gap-10 px-6 md:px-20 py-12 md:py-20">
            <div className="flex flex-col justify-center items-center min-h-[80vh] text-center flex-1">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome Back 👋
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              You’re logged in! 🎉 Start adding your tasks and conquer your goals.
            </p>
            <div className="rounded-xl shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-blue-600 to-indigo-100 text-white  w-9/10">
                    <Addtodo />    
            </div>
            {/* <Link
              to="/dashboard"
              className="px-8 py-3 text-lg font-semibold bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
            >
              Go to My Tasks
            </Link> */}
          </div>
            <div className="flex-1 border-0 border-amber-300 border-4 w-full"><Todo /></div>
        </div>
          {/* Logged-in Section */}
          
        </>
      )}
    </div>
  );
}
