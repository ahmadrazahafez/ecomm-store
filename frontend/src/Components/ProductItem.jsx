import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,image,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <div>
        <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition-all duration-200' src={image[0]} alt="" />
        </div>
        <p className='text-gray-500'>{name}</p>
        <p className='font-bold'>{currency}{price}</p>
        
        </Link>
      
    </div>
  )
}

export default ProductItem
