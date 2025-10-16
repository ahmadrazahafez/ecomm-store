import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col gap-15 sm:gap-0 items-center sm:flex-row sm:mx-20 mt-35 sm:justify-around text-center '>
        <div className='flex flex-col '>
            <img className='w-20 m-auto mb-2' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-500'>We offer hassle free exchange Policy</p>
        </div>

        
        <div className='flex flex-col '>
            <img className='w-20 m-auto mb-2' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>& Days Return Policy</p>
            <p className='text-gray-500'>We provide 7 days free return policy</p>
        </div>

        <div className='flex flex-col '>
            <img className='w-20 m-auto mb-2' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-500'>We provide 24/7 customer support</p>
        </div>


    </div>
  )
}

export default OurPolicy
