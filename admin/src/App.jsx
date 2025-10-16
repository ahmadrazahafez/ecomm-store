import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add'
import Order from './pages/Order'
import List from './pages/List'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'


const App = () => {
  const [token, settoken] = useState("")

  useEffect(() => {
    const dataa = localStorage.getItem("token")
    if(dataa){
    settoken(dataa)
  }
  }, [token])
  

  return (
    <div>

      {
        token===""?
        <Login/>:
        <>
        <Navbar/>
      <hr className='text-gray-200'/>
     <div className='flex w-full'>
       <Sidebar/>

      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
      
     </div>
        </>
        
      }
      

    </div>
  )
}

export default App
