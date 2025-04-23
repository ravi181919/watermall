import React, { useState } from "react";
import { Link } from "react-router-dom";
import {easeIn, easeInOut, motion} from 'framer-motion'

const Cards = ({item}) => {
    console.log(item)
  return (
      <motion.div
      initial={{opacity: 0.3, scale: 0.3, rotate: -10}}
      whileInView={{opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration:0.4,
        ease:easeIn
      }}
       className="h-full w-full flex flex-col relative items-center justify-between  overflow-hidden">
        <div className="h-[80%] w-full overflow-hidden ">
          {/* <div className="h-full absolute top-0 left-0 z-[1] w-full bg-black/85"></div> */}
          <img
            src={item.product_image}
            alt={item.name}
            className="h-full w-full object-cover object-left-top"
          />
        </div>
        <div className="h-[20%] dark:text-white/85 text-black/85 drop-shadow-md w-full flex flex-col gap-[2px] justify-start p-3">
          <h1 className="leading-none text-[1.2vw] font-black tracking-wide">
            {item.name}
          </h1>
          <p className="capitalize font-medium leading-none text-[0.9vw]">{item.features}</p>
         <p className="capitalize font-medium leading-none text-[0.9vw]">
            {item.description.slice(0, 37)}{" "} 
          <Link to={`/detail/${item.id}`} className="text-yellow-500 relative  z-[1000] hover:text-red-400 pointer-events-auto top-0 leading-none text-[0.9vw] dark:text-red-500 font-bold lowercase">more...</Link>
          </p>
         <p></p>
        </div>
      </motion.div>
  );
};

export default Cards;
