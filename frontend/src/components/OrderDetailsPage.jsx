import React, { useState, useEffect } from 'react';
import axios from '../axios/Axios';

import {useParams} from 'react-router-dom'
import Loading from './template/Loading';
import Navbar from './template/Navbar/Navbar';

function OrderDetailsPage() {
  const [order, setOrder] = useState(null);

  const {id} = useParams()

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`/orders/${id}/`); // Assuming your API endpoint
        setOrder([response.data]);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [id]); // Re-fetch data when orderId changes

  if (!order) {
    return <Loading />
  }

  return (
    <div className="h-screen w-full overflow-hidden dark:bg-black/85 bg-white/85 dark:text-white/85 text-black/85 p-4">
      <div className="h-[10vh] w-full">
          <Navbar />
        </div>
      <h1 className="text-[8vw] font-extralight tracking-wider font-[kajiro] leading-none w-full text-center">Order Details</h1>
      <div className=" rounded-lg shadow-md px-20 ">
        <p className="text-sm font-medium py-4">Order ID: <span className='text-sm '>{order[0].id}</span></p>
        <p className="text-sm font-medium pt-1">Customer Name: <span className='text-sm '>{order[0].customer.address || 'N/A'}</span></p>
        <p className="text-sm font-medium pt-1">Customer Email: <span className='text-sm '>{order[0].email}</span></p>
        <p className="text-sm font-medium pt-1">Shipping Address: <span className='text-sm '>{order[0].address || 'N/A'}</span></p>
        <p className="text-sm font-medium pt-1">Order Date: <span className='text-sm '>{order[0].order_date}</span></p>
    
        <h2 className="text-[2vw] pt-5 pb-1 w-full text-center font-black mb-4">Order Items</h2>
        <table className="table-auto w-full ">
          <thead>
            <tr>
              <th className="px-4 font-black tracking-wideq py-2">Product</th>
              <th className="px-4 font-black tracking-wideq py-2">Quantity</th>
              <th className="px-4 font-black tracking-wideq py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[order[0].product].map((item) => (
              <tr key={item.id}>
                <td className="border font-semibold px-4 py-2">{item.name}</td>
                <td className="border font-semibold px-4 py-2">1</td> 
                <td className="border font-semibold px-4 py-2">{item.price} ₹</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-sm font-semibold py-4">Order Status: <span className='text-sm'>{order[0].status}</span></p>
      </div>
    </div>
  );
}

export default OrderDetailsPage;