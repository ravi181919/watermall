import React from "react";
import Navbar from "./template/Navbar/Navbar";
const Sendfeedback = () => {
  return (
    <div className="dark:bg-black/85 h-screen relative w-full drop-shadow-md bg-white/85 dark:text-white/85 text-black/85 lg:h-screen lg:w-full  flex flex-col justify-center items-center">
      <Navbar />

      <div className="relative z-[1] h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-black/20 dark:bg-black/85"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/205/130/non_2x/blue-water-web-banner-with-copy-space-generative-ai-free-photo.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-0 z-[2] left-0 flex items-center justify-center flex-col w-full h-full">
      <h1 className="text-3xl leading-none font-black pt-14">Send Feedback</h1>
      <p className="text-xs leading-none pt-2 pb-2 text-center max-w-xl">
      Send Us Your Valuable Feedback !
      </p>
      <form className=" shadow-md dark:shadow-black/20 shadow-black/20 rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block  font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full bg-transparent p-2 border placeholder:text-black/85 dark:placeholder:text-white/85 dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block  font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="2"
            className="mt-1 w-full bg-transparent p-2 border placeholder:text-black/85 dark:placeholder:text-white/85 dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Send your feedback
        </button>
      </form>
    </div>
    </div>
  );
};

export default Sendfeedback;
