import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import comingsoon from "../../../assets/image/comingsoon.jpg";
const Topnav = () => {
  const [searchText, setSearchText] = useState("");
  const [apiData, setApiData] = useState([]);
  return (
    <div className="w-full h-full flex items-center justify-between ">
      <div className="h-full w-full  md:px-0 overflow-hidden gap-2 flex flex-col items-center justify-center">
        <div className="h-full flex items-center justify-between w-full rounded-md ">
          <IoSearch className="w-[20%] text-2xl  cursor-pointer" />
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            value={searchText}
            placeholder="Search..."
            className="bg-transparent font-medium border text-xs dark:text-white/85 text-black/85 dark:border-zinc-100 border-zinc-800 rounded-md focus:outline-none focus:ring-1 dark:focus:ring-zinc-100 focus:ring-zinc-800  p-2 w-[60%] "
          />
         <div className="w-[20%] flex items-center justify-center">
         {searchText.length > 0 && (
            <RxCross2
              onClick={() => setSearchText("")}
              className="bg-zinc-100 text-black text-xs rounded-full w-[1.7vw] h-[1.7vw] p-1 cursor-pointer"
            />
          )}
         </div>
        </div>
        {/* <div className=" max-h-80 min-w-[45vw] rounded-sm overflow-auto absolute z-[1] top-full mt-1  bg-white/30 backdrop-blur-lg flex flex-col">
          {apiData.map((data, dataIndex) => (
            <Link 
            to={``}
              key={dataIndex}
              className="flex gap-3 duration-200  items-center justify-start px-5 py-2 hover:rounded hover:bg-red-100 w-full"
            >
              <img
                className="w-28 h-16 object-fit rounded-sm shadow-sm shadow-black"
                src={
                  data.backdrop_path || data.profile_path
                    ? ` `
                    : comingsoon
                }
              />
              <span className="text-sm tracking-wide font-medium">
                {}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Topnav;