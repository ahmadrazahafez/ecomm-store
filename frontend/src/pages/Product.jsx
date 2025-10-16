import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Relatedproduct from '../Components/Relatedproduct'

const Product = () => {
  const [data, setdata] = useState([])
  const { productss ,addtocart} = useContext(ShopContext)
  const { productid } = useParams()
  const [image, setimage] = useState("")
  const [size, setsize] = useState(null)

  const fetchdata =  () => {

    productss.map((item) => {
      if (item._id === productid) {
        setdata(item)
        setimage(item.image[0])
      } else {
        return null
      }
    })

  }

  useEffect(() => {
    fetchdata()

  }, [productid, productss])


  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-12 justify-center'>
        <div className='flex-1 flex flex-col h-160 sm:flex-row my-4 gap-4  '>
          {/* images */}
          <div className='  mx-4 flex  sm:flex-col h-full  gap-4'>
            {
              data?.image?.length > 1 && data.image.map((item, i) => {
                return <img key={i} onClick={() => setimage(item)} className='cursor-pointer h-full  sm:w-30 w-30' src={item} alt="" />
              })
            }

          </div>
          {/* first image */}
          <div className='w-full h-full sm:w-[80%]'>
            {image && (
            <img className='h-full w-full' src={image} alt={data.name || "Product image"} />
          )}

          </div>
        </div>

        {/* product info */}

        <div className='flex-1 flex flex-col gap-4 my-4 px-8'>
          <h1 className='font-medium text-2xl'>{data.name}</h1>
          <div className='flex gap-1 my-3 w-10'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <p className='font-medium text-3xl'>${data.price}</p>
          <p className='w-full sm:w-110 text-gray-500'>{data.description}</p>
          <h1 className='font-medium text-xl text-gray-700 mt-8'>Slect Size</h1>
          <div className='flex  gap-4 '>
            {
              data.sizes && data.sizes.map((item, i) => {
                return <button key={i} onClick={() => { setsize(item) }} className={`border px-4 cursor-pointer py-2 ${item === size ? "border-orange-400" : ""}`}>{item}</button>
              })
            }
          </div>
          <button onClick={()=>addtocart(data._id,size)} className='bg-black text-white px-4 py-2 w-40 text-sm mt-3 active:bg-gray-600 cursor-pointer'>Add to cart</button>
          <hr className='text-gray-400' />
          <div className='flex text-sm flex-col gap-1 text-gray-500 mt-8'>
            <p>100% Original Product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Eash Exchange and return policy in 7 Days</p>
          </div>


        </div>

      </div>
      {/* description and reviews */}
      <div className='mt-20 my-40 sm:ml-4'>

        <div className='flex gap-2 justify-center sm:justify-start mx-10'>
          <p className='border px-5 py-2 text-sm border-e-gray-400 font-medium'>Description</p>
          <p className='border px-5 py-2 text-sm border-e-gray-400 font-medium'>Reviews (122) </p>
        </div>
        <div className='flex flex-col gap-2 sm:mx-10 mx-2 border-gray-400 border my-4 '>
          <p className=' px-6 py-4 leading-6 tracking-tight  text-sm text-gray-500 h-30 sm:h-full overflow-scroll sm:overflow-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dicta aperiam non cumque, illo, quidem pariatur archi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas ad quidem fugiat temporibus praesentium eius ratione odio numquam dolorum nisi, sunt ex ipsum ipsam velit commodi unde sit itaque nemo! Nulla eos accusantium omnis provident pariatur odio laudantium eaque repellat quae, corporis laboriosam. Cumque praesentium fuga distinctio culpa necessitatibus itaque iure ad, ducimus reprehenderit, quidem facilis atque rerum eveniet! Accusantium reprehenderit iste vero totam consectetur dolore aliquid eveniet molestias. tecto totam obcaecati ipsa, debitis sit? Blanditiis, quos. Magnam illum deserunt harum a libero.</p>
          <p className=' px-6 py-4 h-20 sm:h-full overflow-scroll sm:overflow-hidden  text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dicta aperiam non cumque, illo, quidem pariatur architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laboriosam? totam obcaecati ipsa, debitis sit? Blanditiis, quos. Magnam illum deserunt harum a libero.</p>
        </div>
      </div>

      {/* display related product */}
      <div>
        <Relatedproduct category={data.category} subcategory={data.subcategory} />

      </div>


    </div>
  )
}

export default Product
