import React, { useEffect, useState } from "react";
import Navbar from "./template/Navbar/Navbar";
import { IoIosSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { data, Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import axios from "../axios/Axios";
import Loading from "./template/Loading";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const isAuthenticated = true;
  const user = true;
  const [dark, setDark] = useState(false)
  const [adminData, setAdminData] = useState([])
  const AdminDashboardAPI = async () => {
    try {
      const {data} = await axios.get("/admindashboard/");
      setAdminData([data]);
    } catch (error) {
      console.log(error);
    }
  }
  const darkLight = () => {
    const toggleTheme = document.documentElement.classList;
    if (dark) {
      toggleTheme.remove("dark");
      toggleTheme.add("light");
    } else {
      toggleTheme.remove("light");
      toggleTheme.add("dark");
    }
    setDark((prev) => !prev);
  };
  useEffect(() => {
    AdminDashboardAPI();
  }, []);
  return  adminData.length >= 0 ? (
    <div className=" h-screen overflow-hidden dark:text-white/85 text-black/85 relative w-full">
      <div className="flex h-full w-full relative ">
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0 h-full w-full dark:bg-black/85"></div>
          <img
            src="/src/assets/image/bg.png"
            alt=""
            className="h-full w-full object-cover "
          />

          {/* Sidebar */}
          <div className="absolute flex top-0 left-0 h-full w-full z-[1] ">
            <aside className="w-64 h-full shadow-md">
              <div className="w-full h-full ">
                <div className="px-8 py-3 h-full w-full">
                  <Link to={`/`}>
                    <h1 className="flex text-xl py-2 font-bold items-center gap-2">
                      <MdAdminPanelSettings className="text-red-600" />
                      <span>Admin Panel</span>
                    </h1>
                  </Link>

                  <hr className="border-none h-[1.5px] bg-red-600 w-full " />

                  <nav className="flex flex-col gap-3 mt-6 ">
                  <Link
                      to={"/"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <FaHome /> Home
                    </Link>
                    <Link
                      to={"/adminlogin"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <RiAdminFill /> Admin Login
                    </Link>
                    <Link
                      to={"/manageusers"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <RiTeamFill /> Manage Users
                    </Link>
                    <Link
                      to={"/manageproducts"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <MdProductionQuantityLimits /> Manage Products
                    </Link>
                    <Link
                      to={"/viewfeedback"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <MdFeedback /> View Feedback
                    </Link>
                    <Link
                      to={"/admindashboard"}
                      className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white  p-4 rounded-md"
                    >
                      <MdDashboard /> Dashboard Overview
                    </Link>
                   
                    

                    
                   
              
                  </nav>
                  <nav className="flex flex-col mt-5">
                    <div className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium  text-zinc-400 p-4 rounded-md">
                      {isAuthenticated && (
                        <>
                          <div className="h-5 w-5  flex items-center justify-center rounded-full overflow-hidden bg bg-zinc-500">
                            {user ? (
                              <img
                                src={user.picture}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <FaUser className="text-xs object-cover" />
                            )}
                          </div>
                          <h1 className="text-sm leading-none font-medium">
                            {user.name}
                          </h1>
                        </>
                      )}
                    </div>
                    {isAuthenticated ? (
                      <button className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
                        <LuLogOut /> <h1>Log Out</h1>
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
                        <LuLogIn /> <h1>Log in</h1>
                      </button>
                    )}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 relative w-full h-screen overflow-hidden  dark:text-white/85 text-black/85">
              {/* Header */}
              <div className="flex justify-between items-center drop-shadow-md border-b-[2px] border-red-600 dark:border-red-700 pr-5">
                <h2 className="text-2xl leading-none flex items-center justify-center font-black p-4 tracking-tighter">
                <span className="text-red-600  pr-1"><MdDashboard /></span> Dashboard Overview
                </h2>
                <div
            onClick={darkLight}
            className={`shadow-sm pl-5 dark:shadow-white/85 shadow-black/85 p-[2px] rounded-full flex items-center justify-center`}
          >
            {dark ? (
              <motion.div 
              initial={{x:0, color: "#000"}}
              animate={{x:-15, 
                rotate: 360,
                color: "#fff"
              }}
              transition={{
                ease:"easeIn", 
                duration: 0.2
              }}
              className="">
                <LuSunMoon className={`font-bold text-sm`} />
              </motion.div>
            ) : (
              <motion.div 
              initial={{x: -15, color: "#fff"}}
              animate={{x:0, 
                rotate: -360,
                color: "#000"
              }}
              transition={{
                ease:"easeOut",
                duration: 0.2
              }}
              className="">
              <IoIosSunny className={`font-bold text-sm`} />
              </motion.div>
            )}
          </div>
              </div>

              {/* Content Section */}
              <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-full p-5">
                {/* {
                  
                    adminData.map((data, dataIndex) => (
                      <div className="bg-black/20 dark:bg-white/40 drop-shadow-md shadow-md h-[20vh] p-6 rounded">
                      <h3 className="text-lg font-bold leading-none whitespace-nowrap text-white/85 dark:text-black/85 ">
                        
                      </h3>
                      <p className="mt-2 text-2xl font-bold">120</p>
                    </div>
                    ))
                  
                } */}
               
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
};

export default AdminDashboard;
