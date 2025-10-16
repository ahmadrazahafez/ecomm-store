import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const { setcartitem } = useContext(ShopContext)
    const [visible, setvisible] = useState(false)

    const logout = () => {
        localStorage.removeItem("token")
        setcartitem([])
        navigate("/login")

    }





    const { search, setsearch, showsearch, setshowsearch, } = useContext(ShopContext)

    return (
        <div className='max-w-screen'>
            <div className='flex justify-between px-5 sm:px-5 md:px-5 lg:px-15 py-10 font-medium'>
                <div>
                    <Link to={"/"}>
                        <h1 className='sm:text-4xl text-2xl font-good2 underline underline-offset-4 hover:decoration-red-500 w-30'>Forever</h1>
                    </Link>
                </div>

                <div>
                    <ul className='sm:flex gap-4 md:gap-10 hidden  '>

                        <NavLink to={"/"} className="flex flex-col items-center ">
                            <h1>Home</h1>
                            <hr className='w-2/4 hidden ' />
                        </NavLink>

                        <NavLink to={"/collection"} className="flex flex-col items-center">
                            <h1 className=''>Collection</h1>
                            <hr className='w-2/4 hidden ' />
                        </NavLink>

                        <NavLink to={"/about"} className="flex flex-col items-center">
                            <h1>About</h1>
                            <hr className='w-2/4  hidden' />
                        </NavLink>

                        <NavLink to={"/contact"} className="flex flex-col items-center">
                            <h1>Contact</h1>
                            <hr className='w-2/4  hidden' />
                        </NavLink>

                    </ul>
                </div>

                <div>
                    <div className='flex gap-8 text-2xl'>
                        <MagnifyingGlassIcon onClick={() => { setshowsearch(!showsearch) }} className="h-8 w-8 text-gray-600 cursor-pointer" />
                        <Link to={"/cart"}>
                            <img className='w-8 h-8 cursor-pointer' src={assets.cart_icon} alt="" /></Link>
                        <div className='group relative cursor-pointer'>
                            <Link to={"/login"}>
                                <img src={assets.profile_icon} className='w-8 h-8 cursor-pointer text-gray-600' alt="" />
                            </Link>
                            <div className='hidden group-hover:block absolute  right-0 top-7 pt-2 py-8'>
                                {
                                    token ? <div className=' flex flex-col font-light text-xl list-none bg-gray-300 w-30 items-center py-2 '>
                                        <Link className='hover:text-white w-full px-2 font-light hover:bg-red-300' to="/">My profile</Link>
                                        <Link className='hover:text-white w-full px-2 font-light hover:bg-red-300' to="/order">Order</Link>
                                        <button
                                            onClick={logout}
                                            className='hover:text-white w-full px-2 hover:bg-red-300 text-left'
                                        >
                                            Logout
                                        </button>


                                    </div> : ""

                                }
                            </div>

                        </div>
                        <Bars3Icon onClick={() => { setvisible(true) }} className="h-8 w-8  sm:hidden text-gray-700 cursor-pointer" />
                    </div>

                    <div className={`absolute top-0 right-0  overflow-hidden bg-black text-white flex transition-all duration-500  ${visible ? "w-full h-2/4" : "w-0"}`}>
                        <div className='mt-5 flex flex-col gap-4 ml-6 w-full'>

                            <div className='flex flex-col  w-full '>
                                <NavLink onClick={() => setvisible(false)} className=" hover:bg-gray-700 py-2 px-4" to={"/"}>Home</NavLink>
                                <NavLink onClick={() => setvisible(false)} className="hover:bg-gray-700 py-2 px-4" to={"/collection"}>Collection</NavLink>
                                <NavLink onClick={() => setvisible(false)} className="hover:bg-gray-700  py-2 px-4" to={"/about"}>About</NavLink>
                                <NavLink onClick={() => setvisible(false)} className="hover:bg-gray-700 py-2 px-4" to={"/contact"}>Contact</NavLink>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
