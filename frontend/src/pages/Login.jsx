import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [currentstate, setcurrentstate] = useState("Signup")

  const token = localStorage.getItem("token")



  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const submitted = async (e) => {
    e.preventDefault()
    if (currentstate === "Signup") {
      const res = await fetch("http://localhost:4000/api/user/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password })
      })
      const data = await res.json()
      if (data.success === true) {

        setemail("")
        setname("")
        setpassword("")
        toast.success(data.message)
        setcurrentstate("Login")

        console.log(name, email, password)
      } else {
        toast.error(data.message)
      }
    }
    if (currentstate === "Login") {
      const res = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const dataa = await res.json()
      if (dataa.success === true) {
        localStorage.setItem("token", dataa.token)
        localStorage.setItem("user", JSON.stringify(dataa.user));

        toast.success(dataa.message)
        navigate("/")
      } else {
        toast.error(dataa.message)
      }

    }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])



  return (
    <div className='flex justify-center items-center h-100'>
      <div className='flex flex-col gap-8 '>

        <div className='inline-flex items-center justify-center gap-2'>
          <h1 className='text-3xl font-prata'>{currentstate}</h1>
          <p className='bg-gray-600 w-10 h-1'></p>
        </div>

        <form onSubmit={submitted} className='w-90 flex flex-col gap-3'>

          {currentstate === "Login" ? "" : <input onChange={(e) => setname(e.target.value)} type="text" name='name' value={name} placeholder='Name' className='border w-full  font-medium px-3 py-2 border-gray-400' required />}


          <input onChange={(e) => setemail(e.target.value)} type="email" name='name' placeholder='Email' value={email} className='border w-full  font-medium px-3 py-2 border-gray-400' required />

          <input onChange={(e) => setpassword(e.target.value)} type="text" name='name' placeholder='Password' value={password} className='border font-medium  w-full px-3 py-2 border-gray-400' required />

          <div className='flex justify-between px-1'>
            <p className='text-[14px] text-gray-600 font-medium cursor-pointer'>Forget Your Password</p>

            {currentstate === "Login" ? <p onClick={() => { setcurrentstate("Signup") }} className='text-[14px] cursor-pointer text-gray-600 font-medium'>Create Acount</p> : <p onClick={() => { setcurrentstate("Login") }} className='text-[14px] cursor-pointer text-gray-600 font-medium'>Login in</p>}




          </div>

          <div className='flex justify-center mt-4'>
            <button type='submit' className='bg-black text-white mx-auto w-30 px-2 py-2 cursor-pointer hover:bg-gray-700 text-xl font-prata'>{currentstate === "Login" ? "Signin" : "Signup"}</button>
          </div>

        </form>


      </div>
    </div>
  )
}

export default Login
