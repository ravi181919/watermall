import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import Navbar from './template/Navbar/Navbar';
import Footer from './template/Footer';


const Login = () => {
  return (
   <div className=" lg:w-full w-full  relative flex flex-col dark:bg-black/85 dark:duration-100 duration-100 bg-white/85  dark:text-white/85">
    <div className="">
      <Navbar/>
    </div>
    {/* <div className="relative z-[1] h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-black/20 dark:bg-black/85"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/205/130/non_2x/blue-water-web-banner-with-copy-space-generative-ai-free-photo.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}
    <div class="min-h-screen  lg:w-[100%] flex items-center flex-col justify-start gap-5 pt-14">
      <div class="w-full flex items-center flex-col gap-1 justify-center h-[10vh] ">
        <h1 class="text-2xl leading-none font-black text-yellow-500 ">Costomer Login</h1>
        <p class="leading-none text-sm font-medium">Please enter your username and password.</p>
      </div>
      <div class="w-full max-w-sm p-6 dark:shadow-black/20 shadow-black/20  rounded-lg shadow-md">
        <form action="#">
         
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold"
              >Email</label>
            <input
              type="email"
              id="email"
              class="mt-1 w-full bg-transparent p-3 placeholder:text-black/85 dark:placeholder:text-white/85  border border-red-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-semibold "
              >Password</label>
            <input
              type="password"
              id="password"
              class="mt-1 w-full bg-transparent p-3 placeholder:text-black/85 dark:placeholder:text-white/85 border border-red-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Enter your password"
            />
          </div>
          
          <h1 class='font-black  leading-none w-full text-center py-2'>Or</h1>
          <div class="flex items-center justify-between gap-5 pb-5 w-full ">
            <a
              href="#"
              class="mt-1 flex items-center gap-5 w-1/2 p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300"
            >
              <span className='text-[1.5vw]'><AiFillGoogleCircle  /></span>
              <h1 class="font-semibold text-md leading-none">Google</h1>
            </a>
            <a
              href="#"
              class="mt-1 w-1/2 p-3 flex items-center gap-5 border border-zinc-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300"
            >
              <span className='text-[1.4vw]'><FaFacebook /></span>
              <h1 class="font-semibold text-md leading-none">Facebook</h1>
            </a>
          </div>
          <button
            type="submit"
            class="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600"
          >
            Login
          </button>
        </form>
        <p class="mt-4 text-center text-sm">
          Don't have an account ? {" "}
          <a href="/signup" class="text-blue-500 font-bold hover:underline"
            > Register / Singup</a>
        </p>
        
      </div>
    </div>
    <div className="h-[40vh] w-full flex items-center justify-center">
      <Footer />
      </div>
   </div>
  )
}

export default Login
