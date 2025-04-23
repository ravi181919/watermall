import React from "react";
import Navbar from "./template/Navbar/Navbar";
import Footer from "../components/template/Footer";
const AboutUs = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden dark:bg-black/85 bg-white/85 dark:text-white/85 text-black/85">
      <Navbar />
      {/* <div className="relative z-[1] h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-black/20 dark:bg-black/85"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/030/205/130/non_2x/blue-water-web-banner-with-copy-space-generative-ai-free-photo.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div> */}

      <div className="absolute top-0 z-[2] left-0">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center pt-20">
            <h1 className="text-4xl leading-none font-black ">
              About Water Campers
            </h1>
            <p className="text-sm font-medium leading-none pt-2 ">
              Exploring adventures, one drop at a time!
            </p>
          </div>

          <div className="mt-4 flex w-full h-[30vh] items-center justify-center gap-8 px-4 py-2">
            {/* Section 1 */}
            <div className=" p-6 rounded-lg shadow-lg w-1/2 h-full">
              <h2 className="text-2xl font-bold leading-none mb-2">
                Our Mission
              </h2>
              <p className="leading-[1.5vw] text-sm">
                At Water Campers, we are dedicated to bringing you the best in
                hydration and camping gear. From innovative designs to premium
                quality materials, our mission is to support your adventures
                with products you can rely on.
              </p>
            </div>

            {/* Section 2 */}
            <div className=" p-6 rounded-lg shadow-lg w-1/2 h-full">
              <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
              <ul className=" list-disc pl-6">
                <li className="mb-1 text-sm leading-none">
                  Durable and eco-friendly products
                </li>
                <li className="mb-1 text-sm leading-none">
                  Trusted by adventurers worldwide
                </li>
                <li className="mb-1 text-sm leading-none">
                  Designed to make every camping trip memorable
                </li>
                <li className="mb-1 text-sm leading-none">
                  Customer-focused support
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[40vh] w-full flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
