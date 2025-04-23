import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import axios from "../../axios/Axios";
import Loading from "./Loading";

const Cart = () => {
  const [orders, setOrders] = useState([]);
   const fetchCart = async () => {
    try {
      const {data}  = await axios.get("/cart/");
      setOrders(data);
    } catch (error) {
      console.log("Error in getting cart", error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);
  console.log(orders);
  
  return orders.length >= 0 ? (
    <div className="lg:w-full dark:bg-black/85 overflow-hidden bg-white/85 dark:text-white/85 text-black/85 w-full flex flex-col gap-5 lg:h-screen h-screen items-center">
      <div className="w-full h-[10vh]">
        <Navbar />
      </div>
      {orders.length >= 0 ? (
        <div className="w-full h-[90vh]">
          <div className="h-full flex flex-col gap-5 py-5 px-10 bg-transparent w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center "
            >
              Your Orders
            </motion.h2>
            <div className="space-y-2 overflow-y-scroll h-full w-full">
              {orders.map((order) => (
                <motion.div
                  key={order.id}
                  className="p-4 dark:bg-white/10 bg-black/10 rounded-md shadow-md"
                >
                  {/* Order Header */}
                  <div className="mb-2 border-b-[1px] dark:border-b-white/85 border-b-black/85 pb-1">
                    <p>
                      <strong>Order ID:</strong> {order.id}
                    </p>
                    {/* <p>
                      <strong>Status:</strong> {order.status}
                    </p> */}
                    {/* <p>
                      <strong>Order Date:</strong> {order.order_date}
                    </p> */}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 mb-3">
                    {/* <img
                      src={order.customer.profile_pic}
                      alt="Customer"
                      className="w-16 h-16 rounded-full border"
                    /> */}
                    <div>
                      {/* <p>
                        <strong>Email:</strong> {order.customer.email}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {order.customer.mobile}
                      </p>
                      <p>
                        <strong>Address:</strong> {order.customer.address}
                      </p> */}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    {/* <img
                      src={order.product.product_image}
                      alt="Product"
                      className="w-24 h-24 object-cover rounded-md border"
                    /> */}
                    <div>
                      <p>
                        <strong>Product:</strong> {order.name}
                      </p>
                      {/* <p>
                        <strong>Description:</strong>{" "}
                        {order.product.description}
                      </p> */}
                      <p>
                        <strong>Price:</strong> ${order.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center mt-10">No orders found.</p>
      )}
    </div>
  ) : <Loading />;
};

export default Cart;
