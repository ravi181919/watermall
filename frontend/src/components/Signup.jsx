import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "./template/Navbar/Navbar";
import Footer from "./template/Footer";

const Signup = () => {
  return (
    <div className=" lg:w-full relative w-full flex-col flex overflow-hidden dark:bg-black/85 dark:duration-100 duration-100 bg-white/85  dark:text-white/85">
      <div className="">
        <Navbar />
      </div>

      {/* <div className="relative z-[1] h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-black/20 dark:bg-black/85"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/205/130/non_2x/blue-water-web-banner-with-copy-space-generative-ai-free-photo.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}

      <div class=" lg:w-[100%] flex items-center flex-col justify-start pt-20 pb-1 overflow-y-scroll">
        <div class="w-full flex items-center flex-col gap-1 justify-center h-[10vh]">
          <h1 class="text-xl leading-none font-black text-yellow-500">
            Customer Signup
          </h1>
          <p class="leading-none text-xs font-medium">
            Create an account.
          </p>
        </div>
        <div class="w-full max-w-md p-6 dark:shadow-black/20 shadow-black/20  rounded-lg shadow-md">
          <form action="#" method="POST">
            <div class="mb-2">
              <label for="firstname" class="block text-sm font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85  p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter firstname"
                required
              />
            </div>
            <div class="mb-2">
              <label for="lasname" class="block text-sm font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter lastname"
                required
              />
            </div>
            <div class="mb-2">
              <label for="username" class="block text-sm font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter username"
                required
              />
            </div>
            <div class="mb-2">
              <label for="password" class="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter password"
                required
              />
            </div>
            <div class="mb-2">
              <label for="text" class="block text-sm font-semibold">
                Address
              </label>
              <input
                type="text"
                id="text"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter address"
                required
              />
            </div>
            <div class="mb-2">
              <label for="mobile" class="block text-sm font-semibold">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Enter mobile"
                required
              />
            </div>
            <div class="mb-2">
              <label for="profile_pic" class="block text-sm font-semibold">
                Profile Picture
              </label>
              <input
                type="file"
                id="profile_pic"
                class="mt-1 w-full bg-transparent placeholder:text-black/85 dark:placeholder:text-white/85 p-2 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                required
              />
            </div>

            <h1 class="font-black leading-none w-full text-center py-1">Or</h1>
            <div class="flex items-center justify-between gap-5 pb-2 w-full">
              <Link
                href="#"
                class="mt-1 flex items-center gap-5 w-1/2 p-3 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              >
                <span className="text-[1.5vw]">
                  <AiFillGoogleCircle />
                </span>

                <h1 class="font-semibold text-md leading-none">Google</h1>
              </Link>
              <Link
                href="#"
                class="mt-1 w-1/2 p-3 flex items-center gap-5 border dark:border-zinc-100 border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              >
                <span className="text-[1.4vw]">
                  <FaFacebook />
                </span>

                <h1 class="font-semibold text-md leading-none">Facebook</h1>
              </Link>
            </div>
            <button
              type="submit"
              class="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700"
            >
              Signup
            </button>
          </form>
          <p class="text-center text-sm">
            Already have an account? {" "}
            <Link href="/login" class="text-blue-500 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="h-[40vh] w-full flex items-center justify-center">
        <Footer />
        </div>
    </div>
  );
};

export default Signup;
