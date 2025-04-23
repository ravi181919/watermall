import React, { useEffect, useState } from "react";
import axios from "../axios/Axios";
import Loading from "./template/Loading";
import Navbar from "./template/Navbar/Navbar";
import FramesAnimation from "./FramsAnimation";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import Cards from "./template/Cards";
import { Link } from "react-router-dom";
import Footer from "./template/Footer";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 2000);
  }, []);
  useEffect(() => {
    const homepage = async () => {
      try {
        const { data } = await axios.get("/products");
        setHomeData(data);
      } catch (error) {
        console.error(`${error} :: Home page :: data not found`);
      }
    };
    homepage();
  }, []);
  return homeData.length > 0 ? (
    <div className="lg:w-full  relative dark:text-white/85 text-black/85 ">
      <div className="w-full h-full">
        <FramesAnimation />
      </div>
      <div className="h-[10vh] absolute top-0 left-0  w-full flex flex-col">
        <div className="h-[10vh] fixed top-0 left-0 z-[20]  w-full">
          <Navbar />
        </div>
        <div className="min-h-[100vh]  w-full relative overflow-y-scroll flex items-center justify-center left-0">
          <AnimatePresence>
            {animate === false && (
              <motion.div
                initial={{ x: -1100, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full font-[kajiro] relative z-[100] flex flex-col gap-1 overflow-hidden flex-shrink-0 items-center justify-center"
              >
                <h1 className="text-[35vw] leading-none font-normal dark:text-white/85 text-black/85 ">
                  Jalwala
                </h1>
                <div className="w-full flex items-center gap-2 mb-2 justify-center">
                  <motion.h1
                    initial={{ x: 1100, opacity: 0.5 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="text-[3vw]  leading-none font-normal"
                  >
                    Stay Pure
                  </motion.h1>
                  <motion.h1
                    initial={{ x: -400, opacity: 0.5 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="text-[3vw]  leading-none font-normal"
                  >
                    Stay Hydrated
                  </motion.h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full dark:bg-black/85 bg-transparent dark:text-white/85 text-black/85 flex flex-col items-center justify-start absolute top-0 left-0 z-[10]">
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: easeIn,
          }}
          className="w-full relative top-[12vh] bg-white/10 left-0"
        >
          <div className="absolute top-0 left-0"></div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 3.5,
              ease: "linear",
            }}
            className="text-[10vw] leading-none w-full text-center py-1 font-thin tracking- uppercase font-[kajiro]"
          >
            Our Products
          </motion.h1>
          <div className="w-full flex justify-center items-center flex-col">
            {homeData.length >= 0 && (
              <div className="w-full h-auto  -mt-8 dark:text-black/85 text-white/85">
                <div className="h-full w-full flex gap-1 flex-wrap items-center justify-center flex-shrink-0 px-2 pt-10">
                  {homeData.map((item, index) => (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 4.5,
                        ease: "linear",
                      }}
                      key={item.id || index}
                      className="w-[23vw]  relative overflow-hidden min-h-[60vh]  dark:text-white/85 text-white/85  shadow-black/10 rounded-md"
                    >
                      <Link className="h-full w-full" to={`/detail/${item.id}`}>
                        <Cards item={item} />
                        <Cards item={item} />
                        <Cards item={item} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
        <div className="h-[50vh] mt-20 w-full flex items-center justify-center">
      <Footer />
      </div>
      </div>
      
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
