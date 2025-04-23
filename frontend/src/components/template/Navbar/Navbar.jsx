import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import Search from "./Search";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import axios from "../../../axios/Axios";
const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState(null);
  const navbar = [
    {
      url: "/",
      pageName: "Home",
      icons: "",
    },
    {
      url: "/aboutus",
      pageName: "About-us",
      icons: "",
    },
    {
      url: "/contactus",
      pageName: "contact-us",
      icons: "",
    },
    {
      url: "/login",
      pageName: "Login & Signup",
      icons: "",
    },
    {
      url: "/adminlogin",
      pageName: "admin",
      icons: "",
    },
  ];

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
    const cartData = async () => {
      try {
        const {data} = await axios.get("/cart/")
        setCart(data.length)
      } catch (error) {
        console.log('Error in getting cart', error);
      }
    }
    cartData();
  }, [])
  return (
    <div className="lg:w-full w-full lg:h-[12vh] absolute top-0 left-0 flex items-center justify-between overflow-hidden z-[10] text-black/85 backdrop-blur dark:text-white/85 bg-white/85 dark:bg-[#262626] ">
      <div className="h-full w-full flex items-center justify-between px-5 py-1">
        <NavLink
          to={`/`}
          className="h-full w-fit overflow-hidden flex  drop-shadow-md items-center justify-center"
        >
          {dark ? (
            <img
              className="object-scale-down object-left-top h-[10vh] w-[15vw]"
              src={`${"/src/assets/image/noBgWhite.png"}`}
              alt="logo"
            />
          ) : (
            <img
              className="lg:object-scale-down lg:object-left-top object-contain h-[10vh] lg:w-[15vw] w-[20vw]"
              src={`${"/src/assets/image/noBgBlack.png"}`}
              alt="logo"
            />
          )}
        </NavLink>

        <div className="h-full w-[40%] lg:w-[35%]">
          <Search />
        </div>

        <nav className="flex items-center justify-center  gap-4 ">
          <div className="lg:flex items-center hidden justify-center gap-4">
            {navbar.map((i, ind) => (
              <NavLink
                key={ind}
                to={`${i.url}`}
                className="LinkAnimation uppercase text-xs leading-none  font-medium  dark:hover:text-white/85 hover:text-black/85 rounded-md"
              >
                {i.pageName}
              </NavLink>
            ))}
          </div>

          <Link to={'/cart'} className="bg-white/85 dark:bg-transparent shadow dark:shadow-black/85 shadow-black/45 w-fit rounded-lg ">
            <button className="flex relative w-full gap-2 uppercase  leading-none items-center justify-center px-2 py-2">
              <FaCartPlus size={15} />{" "}
              <span className="text-xs font-medium">cart</span>
              <span className=" rounded-full  w-[1.5vw] h-[3vh] flex items-center justify-center text-[0.8vw] font-medium dark:bg-white/85 bg-black/85 dark:text-black/85 text-white/85 absolute -right-[6px]  -top-[6px]">{cart}</span>
            </button>
          </Link>
          <div className="bg-white/85 lg:hidden dark:bg-transparent shadow dark:shadow-black/85 shadow-black/45 w-fit rounded-lg ">
            <button className="flex w-full gap-2 uppercase  leading-none items-center justify-center px-2 py-2">
              <MdOutlineArrowDropDownCircle size={15} />{" "}
              <span className="text-xs font-medium">Menu</span>
            </button>
          </div>
          <div
            onClick={darkLight}
            className={`shadow-sm pl-5 dark:shadow-white/85 shadow-black/85 p-[2px] rounded-full flex items-center justify-center`}
          >
            {dark ? (
              <motion.div
                initial={{ x: 0, color: "#000" }}
                animate={{ x: -15, rotate: 360, color: "#fff" }}
                transition={{
                  ease: "easeIn",
                  duration: 0.2,
                }}
                className=""
              >
                <LuSunMoon className={`font-bold text-sm`} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: -15, color: "#fff" }}
                animate={{ x: 0, rotate: -360, color: "#000" }}
                transition={{
                  ease: "easeOut",
                  duration: 0.2,
                }}
                className=""
              >
                <IoIosSunny className={`font-bold text-sm`} />
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
