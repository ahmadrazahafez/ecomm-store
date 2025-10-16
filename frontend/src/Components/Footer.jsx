import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col mt-20 gap-10 px-6  py-10 sm:grid sm:grid-cols-[3fr_1fr_1fr]'>

            <div>
                <img src={assets.logo} alt="" className='w-35 ' />
                <p className='w-full md:w-2/3 text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt, unde inventore sit repudiandae nemo repellendus ullam! Ut quisquam, omnis quaerat perspiciatis quos magni aspernatur mollitia odio officia maiores animi.</p>
            </div>

            <div >
                <h1 className='text-xl font-medium'>Company</h1>
                <ul className='flex flex-col mt-4 gap-1'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='font-medium text-xl'>Get In Touch</p>
                <ul className='flex flex-col gap-1 mt-4'>
                    <li>+92 300-7052117</li>
                    <li>forever@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr/>
            <p className='text-center py-4 font-medium'>Copyright 2025@ forever.com - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer
