import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {productss} = useContext(ShopContext)
    const [bestseller, setbestseller] = useState([])

    useEffect(() => {
        const bestproduct = productss.filter((i)=>i.bestseller)
        setbestseller(bestproduct)
    }, [productss])
    


  return (
    <div className='my-8'>

    <div className='text-center mt-15 py-6 px-10'>
        <Title text1={"Best"} text2={"Sellers"}/>
        <p className='font-light font-serif text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex corrupti magnam at? Lorem ipsum dolor sit amet.</p>
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 px-4 sm:mx-10'>
        {
            bestseller.map((item,index)=>{
                return <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
            })
        }
    </div>

    </div>
  )
}

export default BestSeller
