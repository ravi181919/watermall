import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios/Axios";
import Navbar from "./template/Navbar/Navbar";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock API call for login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/adminlogin/", {
        username: name,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admindashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password.");
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center dark:bg-black/85 dark:duration-100 duration-100 bg-white/85  dark:text-white/85 justify-center ">
      <Navbar />

      {/* <div className="relative z-[1] h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-black/20 dark:bg-black/85"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/205/130/non_2x/blue-water-web-banner-with-copy-space-generative-ai-free-photo.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}

      <div className="w-full absolute top left-0 z-[2] flex flex-col items-center justify-center">
        <div class="w-full flex items-center flex-col gap-1 justify-center h-[10vh]">
          <h1 class="text-xl leading-none font-black drop-shadow text-yellow-600">
            Admin Login
          </h1>
          <p class="leading-none text-xs font-medium">Please login.</p>
          {error && (
            <div className="bg-red-500 text-white text-sm rounded p-2 mb-4">
              {error}
            </div>
          )}
        </div>
        <div className="w-full  max-w-sm p-6 rounded-lg shadow-md">
          <form
            onSubmit={handleLogin}
            className="space-y-4"
            action="/adminlogin"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85  p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85  p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white/85 font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
