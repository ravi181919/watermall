
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-lg mx-auto flex gap-7">
        <div className="basis-1/2 px-5">
          <h1 className="text-9xl font-medium leading-none tracking-tight">
            Jalwala.
          </h1>
          <div className="flex gap-5 mt-7">
            {[
              "Privacy Policy",
              "Cookie Policy",
              "Impressum",
              "Terms",
              "webflow Agency",
            ].map((ele, index) => {
              return (
                <Link to={"#"} key={index} className="text-xs text-zinc-500 ">
                  {ele}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <div className="basis-1/3 flex flex-col gap-2">
            <h1 className="text-xs text-zinc-500 mb-6">Social</h1>
            {["Instagram", "twitter", "gmail", "whatsApp"].map((ele, index) => (
              <Link
                key={index}
                to={`https://www.${ele.toLocaleLowerCase()}.com`}
                className="text-xs border-b-[1px] capitalize border-zinc-400 w-fit pr-2 text-zinc-500"
              >
                {ele}
              </Link>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <h1 className=" text-xs text-zinc-500 mb-6">Sitemap</h1>
            {["Home", "Aboutus", "Contactus","Login"].map((ele, index) => (
              <Link
                key={index}
                to={`/${ele.toLocaleLowerCase()}`}
                className="text-xs border-b-[1px]  capitalize border-zinc-400 w-fit pr-2 text-zinc-500"
              >
                {ele}
              </Link>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end ">
            <p className="text-xs text-right text-zinc-300 mb-10">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
              className="w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
