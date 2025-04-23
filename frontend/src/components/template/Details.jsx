import axios from "../../axios/Axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  useEffect(() => {
    const homepage = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        console.log(data);
        setDetail(data);
      } catch (error) {
        console.error(`${error} :: Home page :: data not found`);
      }
    };
    homepage();

    // for recommendation
    const recommendation = async () => {
      try {
        const { data } = await axios.get("/products");
        setRecommendation(data);
      } catch (error) {
        console.error(`${error} :: Home page :: data not found`);
      }
    };
    recommendation();
  }, [id]);

  const addToCart = async() => {
    try {
      const {data} = await axios.post(`/cart/`, {
        name: detail.name,
        price: detail.price,
        quantity: 1,
      });     
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="w-full h-screen dark:bg-black/85 bg-white/85 dark:text-white/85 text-black/85">
      <div className="h-[10vh] w-full ">
        <Navbar />
      </div>
      <div className="h-[90vh] py-2 w-full pt-4">
        <div className="h-full  w-full flex justify-between  overflow-hidden px-6">
          <div className="h-full w-[35%] flex overflow-hidden rounded-md relative">
            <div className="absolute top-0 left-0 h-full w-full dark:bg-black/0 bg-white/0">
              <div className="absolute bottom-0 flex h-full items-end justify-center  w-full  gap-2 px-10 pt-2 pb-1">
                <div onClick={addToCart} className="bg-white/85 dark:bg-transparent shadow dark:shadow-black/85 shadow-black/45 w-1/2 rounded-lg ">
                  <button className="flex w-full gap-5 uppercase  leading-none items-center justify-center px-4 py-3">
                    <FaCartPlus size={25} />{" "}
                    <span className="text-xs font-medium">Add to cart</span>
                  </button>
                </div>
                <div className="bg-white/85 dark:bg-transparent shadow  dark:shadow-black/85 shadow-black/45  w-1/2 rounded-lg">
                  <button className="flex w-full gap-5 items-center uppercase leading-none justify-center px-4 py-3">
                    <BiSolidShoppingBags size={25} />{" "}
                    <span className="text-xs font-medium">Buy now</span>
                  </button>
                </div>
              </div>
            </div>
            <img
              src={detail.product_image}
              alt=""
              className="h-[85%] pt-5 w-full object-cover object-left-top rounded-md"
            />
          </div>
          <div className="w-[65%] h-full pr-0 pl-8">
            <div className="w-full h-full flex flex-col justify-between items-center">
              <div className="w-full">
                <h1 className="font-black text-[2.5vw] w-full text-center leading-none tracking-tight capitalize">
                  {detail.name}
                </h1>
              </div>
              <div className="w-full flex-col flex gap-1 ">
                <p className="font-black leading-none pb-[4px]">
                  {detail.slogan}
                </p>
                <h1 className="text-sm font-bold border-b-[2px] pb-[1px] leading-none tracking-tight border-red-500 w-fit">
                  Feature
                </h1>
                <p className="text-xs tracking-wide font-medium leading-none pl-2">
                  {detail.features}
                </p>
                <h1 className="text-sm font-bold border-b-[2px] pb-[1px] leading-none tracking-tight border-red-500 w-fit">
                  Description
                </h1>
                <p className="text-xs tracking-wide font-medium leading-none pl-2">
                  {detail.description}
                </p>
                <h1 className="text-sm font-bold border-b-[2px] pb-[1px] leading-none tracking-tight border-red-500 w-fit">
                  About
                </h1>
                <p className="text-xs tracking-wide font-medium leading-none pl-2">
                  {detail.category}, {detail.subcategory} with the capacity of{" "}
                  <span>
                    {detail.capacity_ml > 20
                      ? `${detail.capacity_ml}ml`
                      : `${detail.capacity_ml}L`}
                  </span>
                </p>
                <h1 className="text-sm font-bold border-b-[2px] leading-none tracking-tight border-red-500 w-fit">
                  Price
                </h1>
                <p className="text-xl font-medium  pl-2">
                  ₹{""}
                  <span className="text-3xl font-black tracking-tighter">
                    {(detail.price / 100) * 100}
                  </span>
                </p>
              </div>
              <div className=" h-[40vh] gap-2 flex items-center overflow-x-scroll px-2 w-full">
                {recommendation.map((recommendationList, index) => (
                  <Link
                    to={`/detail/${recommendationList.id}`}
                    key={index}
                    className="min-w-[20vw] h-full rounded-md overflow-hidden relative"
                  >
                    <img
                      src={recommendationList.product_image}
                      alt={recommendationList.name}
                      className="h-[80%]"
                    />
                    <div className=" h-[20%] w-full p-2">
                      <h1 className="text-md font-black capitalize leading-none">
                        {recommendationList.name}
                      </h1>
                      <p className="leading-none text-xs font-medium tracking-tight">
                        {recommendationList.slogan}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
