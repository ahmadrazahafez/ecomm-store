import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import Carttotal from '../Components/Carttotal'

const Cart = () => {
  const { productss, cartitem, currency,updatequantity,navigate } = useContext(ShopContext)
  const [cardata, setcardata] = useState([])

  useEffect(() => {
    if(productss.length>0){

      let temdata = []
      for (const items in cartitem) {
        for (const item in cartitem[items]) {
          if (cartitem[items][item] > 0) {
            temdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item],
          })
        }
      }
    }
    setcardata(temdata)
  }
  }, [cartitem,productss])
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title text1={"Your"} text2={"Cart"}/>

      <div className="space-y-6">
       {cardata.map((item, i) => {
  const product = productss.find((p) => p._id === item._id);

  if (!product) return null; // skip rendering until product is available

  return (
    <div key={i} className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white shadow-md hover:shadow-lg transition rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center gap-5 w-full sm:w-auto">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg border"
          src={product.image[0]}
          alt={product.name}
        />
        <div>
          <p className="text-lg font-medium text-gray-800">{product.name}</p>
          <p className="text-gray-600 mt-1">{currency}{product.price}</p>
          <p className="bg-gray-100 inline-block mt-2 px-3 py-1 rounded-full text-sm text-gray-700">
            Size: {item.size}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        <input
          className="w-20 px-3 py-2 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          type="number"
          min={1}
          defaultValue={item.quantity}
        />
        <img
          onClick={() => updatequantity(item._id, item.size, 0)}
          className="cursor-pointer w-6 h-6 opacity-70 hover:opacity-100 transition"
          src={assets.bin_icon}
          alt="Remove"
        />
      </div>
    </div>
  );
})}

      </div>


      {
        cardata.length>0&&
       <div className='flex justify-end'>
         <div className='flex flex-col  my-20 '>
        
      <div>
        <Carttotal/ >
      </div>
      <div className=''>
        
      <button onClick={()=>navigate("/order_placed")} className='bg-black w-full text-white  py-2 rounded-2xl px-6   cursor-pointer hover:bg-gray-800 '>Proceed to Checkout</button>
      </div>
       
      </div>
       </div>
      }

     




    </div>
  )
}

export default Cart
