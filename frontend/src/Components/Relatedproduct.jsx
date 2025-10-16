import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const Relatedproduct = ({category,subcategory}) => {
    const [related, setrelated] = useState([])
    const {productss} = useContext(ShopContext)


    useEffect(() => {
        if(productss.length>0){
        let productcopy = productss
        productcopy = productcopy.filter((item)=>item.category === category)
        productcopy = productcopy.filter((item)=>subcategory === item.subcategory)

        setrelated(productcopy.slice(0,5))
        }

        

    }, [productss,category,subcategory])
    
  return (
    <div>
        <div className='flex justify-center flex-col'>
            <div className='text-center'>
                
            <Title text1={"Related"} text2={"Products"}/>
            </div>
            <div className='grid grid-cols-2 gap-x-2 px-3 sm:gap-x-4 mx-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {related&&related.map((item,i)=>{
                    return <ProductItem key={i} name={item.name} image={item.image} price={item.price} id={item._id} />
                })}

            </div>
        </div>
      
    </div>
  )
}

export default Relatedproduct
