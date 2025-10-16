import React from 'react'
import Hero from '../Components/Hero'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='my-10 flex flex-col gap-13'>
      <div className='text-center'>
        <Title text1={"Contact"} text2={"US"}/>
      </div>

      <div className='flex justify-center flex-col sm:flex-row  text-[17px] gap-13'>
        <img className='w-[480px] sm:px-0 px-3' src={assets.contact_img} alt="" />

        <div className='flex sm:justify-center px-4 items-center '>
          <div className='text-gray-600 flex flex-col gap-8'>
            <p className='font-semibold text-black text-xl'>Our Store</p>
            <p>H3 AmanPlaza  <br />Near Emporium Mall Jahor Town Lahore</p>
            <p>Tel: (+92)3007052117 <br />Email: ahmadrazahafez@gmail.com</p>

            <h1 className='text-xl font-semibold text-black'>Career at Forever</h1>
            <p>Learn more about us and job openings</p>

            <button className='items-start hover:bg-black text-black hover:text-white transition-all duration-500 border w-40 px-3 py-2 cursor-pointer text-xl'>Explore Jobs</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
