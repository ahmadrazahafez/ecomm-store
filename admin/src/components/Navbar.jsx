import React, { useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const logout = ()=>{
   const not =  window.confirm("are you sure to want to logout")
   if(!not){
    return
   }
    localStorage.removeItem("token")
    window.location.reload()
  }

 

  return (
    <div className='border border-gray-300 shadow-lg'>
        <div className='flex  justify-between  px-10 items-center py-4'>
          <div className='w-[max(10%,120px)]'>
            
            <img className='w-full h-full' src={assets.logo} alt="" />
            <h1 className='text-red-500 font-prata text-sm md:text-xl'>Admin Panel</h1>
          </div>
            <button onClick={logout} className='bg-gray-600 px-5 py-1.5 cursor-pointer rounded-full text-white'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
