
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const NewsLetterBox = () => {
    const [email, setemail] = useState("")
    const submitdata = (e) => {
        e.preventDefault()
        toast.success("success")
        setemail("")


    }
    return (
        <div className='text-center sm:w-160 px-3 mx-auto my-40 flex flex-col gap-4'>
            <p className='text-gray-900 text-2xl font-medium  font-prata'>Subscribe Now & get 20% off</p>
            <p className='mt-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur  adipisicing adipis elit. Possimus mol Lorem, ipsum.</p>

            <form className='mt-4 w-full flex justify-center' onSubmit={submitdata}>

                <input value={email} name='email' className=' px-3 focus:border-2 border-green-400 py-1 font-medium outline-none w-1/2 text-black' type="email" placeholder='Enter your email' required onChange={(e) => { setemail(e.target.value) }} />

                <button type='submit' className='bg-black text-white px-4 py-2'>Subscribe</button>

            </form>



        </div>
    )
}

export default NewsLetterBox
