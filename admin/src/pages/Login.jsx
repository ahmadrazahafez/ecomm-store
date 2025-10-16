import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitted = async (e) => {
        e.preventDefault()
        const res = await fetch("https://ecomm-backend-chi.vercel.app/api/user/admin", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (data.success===false) {
             return alert(data.message)

        }else if(data.success === true){
            localStorage.setItem("token", data.token)
            console.log(data.token)
            window.location.reload()
          
        }
    }
    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-gray-200'>
            <div className='w-100  transition-all duration-400 h-90  hover:shadow-2xl hover:bg-white rounded-2xl border-gray-300 border hover:border-none flex flex-col items-center  gap-10 pt-10'>
                <h1 className='text-3xl font-prata font-medium'>Admin Login</h1>



                <form onSubmit={submitted} className='flex w-full flex-col gap-4'>
                    <input onChange={(e) => { setemail(e.target.value) }} type="email" className='border-b-2 font-medium focus:outline-none border-gray-300 px-2 mx-10  py-1' placeholder='Email' required />
                    <input onChange={(e) => { setpassword(e.target.value) }} type="password" className='border-b-2 font-medium focus:outline-none border-gray-300 px-2 mx-10   py-1' placeholder='Password' required />

                    <button type='submit' className='border hover:scale-x-105 transition-all duration-500 w-30 mx-auto mt-7 text-black px-4 text-center cursor-pointer font-serif text-xl   py-1 '>Sign In</button>
                </form>

                {/* <div className=''>
               email= {email} <br />
            pass={password}
            </div> */}


            </div>

        </div>
    )
}

export default Login
