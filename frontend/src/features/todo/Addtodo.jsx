import { useState } from "react";
export default function Addtodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const handleSubmit = (e) => {
        setIsClicked(false)
        e.preventDefault();
        // Dispatch add todo action
        reset()
    };
    const reset=()=>{
      setTitle("")
      setDescription("")
    }
    return (<>
    {
    isClicked ? (
       <div className="w-full flex justify-center p-5">
  <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      ✍️ Add a New Todo
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black placeholder:text-2xl text-black font-bold"
        required
      />

      {/* Description Textarea */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black placeholder:text-2xl text-black"
        required
      />

      {/* Buttons */}
      <div className="flex space-x-4 w-full">
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-lg shadow"
        >
          Add Todo
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 transition text-gray-800 font-medium rounded-lg shadow"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() =>{
            setIsClicked(false)
            reset()
          }}
          className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 transition text-gray-800 font-medium rounded-lg shadow"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
    ) : (
        <div>
            <button onClick={() => setIsClicked(true)} className="px-4 py-2  text-white rounded">Add Todo</button>
        </div>
    )}
    </>);
   }       