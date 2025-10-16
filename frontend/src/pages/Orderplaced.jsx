import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import Carttotal from '../Components/Carttotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'


const Order = () => {
  const { navigate, cartitem, setcartitem, productss, carttotal } = useContext(ShopContext)


  const user = JSON.parse(localStorage.getItem("user"));
  const userid = user?._id;
  
  const [method, setmethod] = useState("")
  const token = localStorage.getItem("token")

  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const changehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const submitted = async (e) => {
    e.preventDefault()
    try {
      let orderitem = []
      for (const items in cartitem) {
        for (const item in cartitem[items]) {
          if (cartitem[items][item] > 0) {
            const iteminfo = structuredClone(productss.find(pro => pro._id === items))
            if (iteminfo) {
              iteminfo.size = item
              iteminfo.quantity = cartitem[items][item]
              orderitem.push(iteminfo)
            }
          }
        }
      }

      let orderdata = {
        address: formdata,
        items: orderitem,
        amount: carttotal(),
      }

      if (method === "cod") {
        const res = await fetch("https://ecomm-backend-blond.vercel.app/api/order/place", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            token: token,
          },
          body: JSON.stringify(orderdata)
        })
        const data = await res.json()
        if (data.success === true) {
          setcartitem({})
          navigate("/order")
        } else {
          toast.error(data.message)
        }
      }




    } catch (err) {

    }


  }
  return (
    <form onSubmit={submitted}>
      <div className='flex justify-between px-50 mt-10 max-h-[80vh] my-40'>
        {/* lef  tside     */}

        <div className='flex flex-col gap-6 min-w-[10]'>

          <div className='text-xl font-medium '>

            <Title text1={"Delivery"} text2={"Information"} />
          </div>

          <div className='flex gap-2 w-full'>
            <input type="text" onChange={changehandler} name='firstname' value={formdata.firstname} placeholder='First Name' className='border border-gray-300 px-2 py-1 w-full' required />

            <input type="text" onChange={changehandler} name='lastname' value={formdata.lastname} placeholder='Last Name' className='border border-gray-300 px-2 py-1 w-full ' required />

          </div>
          <div>
            <input type="email" onChange={changehandler} name='email' value={formdata.email} placeholder='Email Address' className='border  border-gray-300 px-2 py-1 w-full' required />
          </div>
          <div>
            <input type="text" onChange={changehandler} name='street' value={formdata.street} placeholder='Street' className='border  border-gray-300 px-2 py-1 w-full' required />

          </div>

          <div className='flex gap-2'>
            <input type="text" onChange={changehandler} name='city' value={formdata.city} placeholder='City' className='border  border-gray-300 px-1.5 py-1 w-full' required />
            <input type="text" onChange={changehandler} name='state' value={formdata.state} placeholder='State' className='border  border-gray-300 px-1.5 py-1 w-full' required />
          </div>

          <div className='flex gap-2'>
            <input type="text" onChange={changehandler} name='zipcode' value={formdata.zipcode} placeholder='Zipcode' className='border  border-gray-300 px-1.5 py-1 w-full' required />

            <input type="text" onChange={changehandler} name='country' value={formdata.country} placeholder='Country' className='border  border-gray-300 px-1.5 py-1 w-full' required />
          </div>

          <div>
            <input type="number" onChange={changehandler} name='phone' value={formdata.phone} placeholder='Phone' className='border  border-gray-300 px-1.5 py-1 w-full' required />
          </div>


        </div>

        {/* Right sidedd */}

        <div className='flex flex-col '>
          <div className=''>
            <Carttotal />
          </div>
          <div className=''>
            <Title text1={"Payment"} text2={"Method"} />
            <div className='flex gap-2 py-2'>

              <div onClick={() => { setmethod("rozer") }} className=' flex cursor-pointer border py-2 px-2 border-gray-400 items-center gap-1'>
                <img className='h-4 mx-4' src={assets.razorpay_logo} alt="" />
                <p className={`w-3.5 ${method === "rozer" ? "min-w-3.5 h-3.5 border bg-green-600 rounded-full" : ""} `}></p>
              </div>

              <div onClick={() => { setmethod("stripe") }} className=' flex cursor-pointer border py-2 px-2 border-gray-400 items-center gap-1'>
                <img className='h-4 mx-4' src={assets.stripe_logo} alt="" />
                <p className={`w-3.5 ${method === "stripe" ? "min-w-3.5 h-3.5 border bg-green-600 rounded-full" : ""} `}></p>
              </div>

              <div onClick={() => { setmethod("cod") }} className=' flex cursor-pointer border py-2 px-2 border-gray-400 items-center gap-2'>
                <p className='font-medium'>Cash On Delivery</p>
                <p className={`w-3.5 ${method === "cod" ? "min-w-3.5 h-3.5 border bg-green-600 rounded-full" : ""} `}></p>
              </div>

            </div>

          </div>

          <div className='flex justify-end mt-4 '>
            <button type='submit' className='bg-black text-white px-3 hover:bg-gray-700 cursor-pointer py-2 rounded-2xl w-full font-medium'>Place Order</button>
          </div>
        </div>




      </div>
    </form>
  )
}

export default Order
