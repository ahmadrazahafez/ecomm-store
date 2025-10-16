import React from 'react'
import heroimage from "../assets/heroimage.jpeg"
import heroimage2 from "../assets/horoimage2.jpg"

const Hero = () => {
    return (
        <div className='flex max-w-screen h-full sm:h-130 sm:mx-20 mx-4'>
            <div className='border-1 w-full flex sm:h-full h-1/2 flex-col sm:flex-row '>
                {/* hero left side */}
                <div className='flex flex-col   gap-3  justify-center w-full sm:w-1/2  h-80 sm:h-full'>

                   <div className='sm:ml-40 ml-30 flex  flex-col gap-3'>
                     <div className='flex flex-row  items-center gap-2'>
                        <hr className="w-10 border-t-3 border-black" />
                        <p className='font-serif text-xl'>Our Best Seller</p>
                    </div>


                    <h1 className='sm:text-5xl text-2xl w-full font-prata '>Latest Arrivals </h1>

                    <div className='flex  gap-3 items-center'>
                        <h1 className='text-xl font-serif'>Shop Now</h1>
                        <hr  className='w-10 border-t-3'/>
                    </div>
                   </div>

                </div>

                {/* hero right side */}

                <div className='h-full sm:w-1/2'>
                   <img src={heroimage2} className='w-full h-full  bg-contain' alt="" />
                </div>



            </div>
        </div>
    )
}

export default Hero
