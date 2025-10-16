import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {
    const {search,setsearch,showsearch,setshowsearch,} = useContext(ShopContext)
    const [visible, setvisible] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if(location.pathname.includes("collection")){
            setvisible(true)
        }else{
            setvisible(false)
        }
    }, [location])
    



  return showsearch & visible?(
    <div className='bg-gray-50 my-6 h-25 flex border-gray-300 border-b border-t'>
        <div className='flex justify-center items-center gap-4  py-4 w-1/2 sm:w-200 m-auto '>
            <div className='flex border rounded-4xl justify-center px-5 py-1'>
                <input type="text" className={`outline-none w-50 sm:w-200 border-gray-500'  `} placeholder='Search Items' />
                <img src={assets.search_icon} className='w-6 h-6' alt="" />
            </div>
            <img onClick={()=>{setshowsearch(false)}} src={assets.cross_icon} className='inline w-3 h-4 py- cursor-pointer' alt="" />
        </div>
    </div>
  ):null
}

export default Searchbar
