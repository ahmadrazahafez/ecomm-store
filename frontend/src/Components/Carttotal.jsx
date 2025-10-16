import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const Carttotal = () => {
    const {products,currency, carttotal,delivery_fee,navigate} = useContext(ShopContext)
  return (
    <div className='w-100 flex flex-col gap-4 '>
      <div className='flex flex-col gap-2 my-5 items-center sm:items-start'>
        <Title text1={"Cart"} text2={"Totals"}/>
        <div className=' w-100  py-2  flex flex-col gap-4 border-gray-400 px-3'>
            <div className='flex justify-between'>
                <p className='font-medium text-xl '>Subtotal</p>
                
            <p className=''>{currency}{carttotal()}.00</p>
            </div>
            <hr className='text-gray-200'/>
            <div className='flex justify-between'>
                <p className='font-medium text-xl '>Shipping</p>
            <p>{delivery_fee}.00</p>

            </div>
            <hr className='text-gray-200'/>
            <div className='flex justify-between'>
                <p className='font-medium text-xl '>Totals</p>
            <p>{carttotal()+delivery_fee}.00</p>
                
            </div>
            <hr className='text-gray-200'/>

        </div>

      </div>
     
    </div>
  )
}

export default Carttotal
