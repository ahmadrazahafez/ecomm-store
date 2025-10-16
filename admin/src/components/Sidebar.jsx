import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='min-h-screen border-r-2 border-gray-200 md:w-70 w-20'>

            <div className='flex flex-col py-10 md:ml-7 gap-5'>

                <NavLink to={"/add"} className={({ isActive }) =>
                    `flex border border-gray-200 border-r-0 items-center pl-4 text-[20px] py-3 gap-3 
     ${isActive ? "bg-pink-100 text-black" : "text-black bg-transparent"}`
                }>
                    {/* <img className='h-8 w-8' src={assets.cart_icon} alt="" /> */}
                    <p className='text-2xl bg-black text-white border rounded-full h-10 w-9 text-center'>+</p>
                    <h1 className='hidden md:block font-medium'>Add Item</h1>
                </NavLink>

                <NavLink to={"/list"} className={({ isActive }) =>
                    `flex border border-gray-200 border-r-0 items-center pl-4 text-[20px] py-3 gap-3 
     ${isActive ? "bg-pink-100 text-black" : "text-black bg-transparent"}`}>

                    <img className='h-8 w-8' src={assets.quality_icon} alt="" />
                    <h1 className='hidden md:block font-medium'>List Items</h1>
                </NavLink>

                <NavLink to={"/order"} className={({ isActive }) =>
                    `flex border border-gray-200 border-r-0 items-center pl-4 text-[20px] py-3 gap-3 
     ${isActive ? "bg-pink-100 text-black" : "text-black bg-transparent"}`}>
                    <img className='h-8 w-8' src={assets.quality_icon} alt="" />
                    <h1 className='hidden md:block font-medium'>Orders</h1>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar
