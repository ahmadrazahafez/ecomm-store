import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Orderplaced from './pages/Orderplaced'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Navbar from './Components/Navbar'
import Contact from './pages/Contact'
import Collection from './pages/Collection'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LatestCollection from './Components/LatestCollection'
import Searchbar from './Components/Searchbar'
import Footer from './Components/Footer'
import Order from './pages/Order'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  < >
  <div>

  </div>
  <Navbar/>
  <Searchbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/order_placed' element={<Orderplaced/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/latestcollection' element={<LatestCollection/>}/>
    <Route path='/product/:productid' element={<Product/>}/>
  </Routes>
  <Footer/>

  <ToastContainer position="top-right" autoClose={3000} />

  </>
  )
}

export default App
