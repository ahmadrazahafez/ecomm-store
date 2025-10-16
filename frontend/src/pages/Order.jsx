import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const Order = () => {
  const { productss } = useContext(ShopContext)
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"));
  const userid = user?._id;

  const [orderdata, setorderdata] = useState([])

  const loadorderdata = async () => {

    if (!token) {
      null
    } else {
      const res = await fetch("https://ecomm-backend-chi.vercel.app/api/order/userorder", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          token: token
        },
        body: JSON.stringify({ userid })
      })
      const dataa = await res.json()
      if (dataa.success === true) {
        console.log(dataa.userorder)
        setorderdata(dataa.userorder)
      } else {
        toast.error(dataa.message)
      }
    }
  }

  useEffect(() => {
    loadorderdata()
  }, [token])

  return (
    <div className='sm:px-40 sm:py-10 px-4 flex flex-col gap-5'>
      <div className=''>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        <hr  className=' mb-6'/>

        <div className='flex flex-col gap-10'>
          {
            orderdata.reverse().map((item, i) => {
              return <div key={i} className='flex flex-col sm:flex-row border-b border-gray-200 sm:justify-between items-center'>

                <div className='flex flex-col gap-8 w-full'>

                  {item.items.map((items, i) => {
                    return <div className='flex'>
                      <img className='h-30 w-30' src={items.image} alt="" />
                      <div>

                        <p className='font-medium  mx-3 text-xl'>{items.name}</p>

                        <div className='flex gap-5 my-6 mx-3 text-gray-400'>
                          <p className='font-medium text-xl'>${items.price}</p>
                          <p className='font-medium text-xl'>Quantity:{items.quantity}</p>
                          <p className='font-medium text-xl'>Size:{items.size}</p>
                        </div>

                        <div className='mx-3 text-gray-400 text-xl'>
                         Date:  {new Date(item.date).toDateString()}
                        </div>

                      </div>

                    </div>

                  })}

                  <div className='flex gap-3 flex-col'>
                    <div className='flex gap-5 font-medium text-base text-gray-400'>


                      <p className='mx-3 text-xl bg-black/80 px-3 py-1 text-white'>Total Bill: <span className='text-red-400'>{item.amount + 10}</span> </p>
                    </div>
                    <p className='text-base font-medium'></p>
                  </div>

                </div>
                <div className='flex w-full  justify-end items-center gap-2'>
                  <p className='bg-green-600 h-3 rounded-full w-3'></p>

                  <p className='text-base font-medium'>{item.status}</p>
                </div>

                <div className='flex w-full items-center justify-end'>
                  <button onClick={loadorderdata()} className='border border-gray-200 px-3 py-1.5 cursor-pointer text-base font-medium'>Track Order</button>
                </div>
              </div>
            })
          }
        </div>



      </div>
    </div>
  )
}

export default Order
