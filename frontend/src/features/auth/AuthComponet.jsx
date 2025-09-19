import { useState } from "react";

export default function AuthComponent({ onClose, sideImg, name, inputs, onSubmit ,error}) {
  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.type]: "" }), {})
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Left Side (Image) */}
        <div className=" md:block md:w-1/2 bg-gray-200">
          <img src={sideImg} alt="Login illustration" className="w-full h-full object-cover" />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-black">
          <h1 className="text-2xl font-bold text-center mb-6">{name}</h1>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {inputs.map((input, idx) => (
              <input
                key={idx}
                type={input.type}
                placeholder={input.placeholder}
                value={formData[input.type]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            ))}
            {error && <h1 className="text-red-600">{error}</h1>}
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition w-full"
            >
              {name}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
