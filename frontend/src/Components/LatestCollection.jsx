import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {productss} = useContext(ShopContext)
    const [latestproduct, setlatestproduct] = useState([])

    useEffect(() => {
        setlatestproduct(productss.slice(10,20))
    }, [productss])
    

  return (
   <div className='my-4'>
     <div className='text-center py-8 '>
        <Title text1={"Latest"} text2={"Collection"}/>

        <p className='text-gray-500   font-light font-serif'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam esse officiis libero, veniam deleniti .</p>
    </div>


{/* rendering products ============= */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 sm:px-8 mx-4'>
        {
            latestproduct.map((item,index)=>{
              return  <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            })
        }


    </div>



   </div>
  )
}

export default LatestCollection
