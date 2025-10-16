import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Package } from "lucide-react";


const Order = () => {
  const token = localStorage.getItem("token")
  const [orders, setorders] = useState([])

  const fetchallorder = async () => {
    const res = await fetch("https://ecomm-backend-chi.vercel.app/api/order/list", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const data = await res.json()
    if (data.success === true) {
      setorders(data.orders)
    }
  }

  const changestatus = async(e,orderid)=>{
    const res = await fetch("https://ecomm-backend-chi.vercel.app/api/order/status",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body:JSON.stringify({orderid,status:e.target.value})
    })
    const data = await res.json()
    if(data.success===true){
      alert(data.message)
      await fetchallorder()
    }
  }


  useEffect(() => {
    fetchallorder()
  }, [token])

  return (
    <div className='sm:px-20 sm:py-20 px-3 py-5'>
      <div>
        <p className='text-4xl font-medium font-prata'>All Orders</p>
      </div>
      <div className=' w-300 '>
        {orders.map((order, i) => {
          return <div className='w-full grid grid-cols-[.5fr_3fr_2fr_1fr_1fr] my-10 border  items-center py-4 border-gray-300 px-4' key={i}>

            <div>
              <Package size={52} color="#333" />
            </div>

            <div className='flex flex-col gap-3'>
             <div>
               {order.items.map((item, i) => {
                return <div key={i}>
                  <p className='text-xl'>{item.name} x <span className='text-red-500'>{item.quantity}{item.size}</span></p>

                </div>
              })}
             </div>

             <div className='text-gray-600 font-medium'>
               <p>{order.address.firstname + " " + order.address.lastname}</p>
              <p> {order.address.street}</p>
              <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode} </p>
              <p>{order.address.phone}</p>
             </div>


            </div>

            {/* <div>
              <p> {order.address.street}</p>
              <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode} </p>
              <p>{order.address.phone}</p>
            </div> */}




            <div>
              <p>Items:{order.items.length}</p>
              <p> Payment: {order.paymentmethod}</p>
              <p>Date: {new Date(order.date).toDateString()}</p>
            </div>

            <div>
              ${order.amount + 10}
            </div>


            <div>
              <select onChange={(e)=>changestatus(e,order._id)} className='border px-0.5'>
                <option value={order.status}>{order.status}</option>
                <option value="packing">Packing</option>
                <option value="shiping">Shipping</option>
                <option value="out for delivery">Out for delivery</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        })}


      </div>
    </div>
  )
}

export default Order
