import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  const [color, setcolor] = useState("white")
  return (
   <div className={`${color==="white"?"":"text-red-700"}`} style={{backgroundColor:color}}>

    {
      color==="white"?
    <button  onClick={()=>{setcolor("black")}} className='text-white bg-black border px-3 py-1 w-40 cursor-pointer '>Dark Mode</button>:
    <button onClick={()=>{setcolor("white")}} className=' border px-3 py-1 w-40 cursor-pointer text-black bg-white'>Light Mode</button>
    }


<>
    <div className='flex flex-col gap-10  mt-10 my-10  mx-auto'>
      <div className='flex justify-center'>
        <Title text1={"About"} text2={"US"}/>
      </div>

      <div className='flex flex-col sm:flex-row justify-center gap-15 px-5 sm:px-60 mx-auto'>
        <div className='w-full'>
          <img src={assets.about_img} className='w-full' alt="" />
        </div>

        <div className='sm:mt-10 flex flex-col gap-8 text-gray-600'>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero veritatis error, culpa ut totam magni nemo sunt, dolor non eaque accusamus ad cupiditate praesentium esse corrupti officia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore exercitationem, impedit quae minus magnam consectetur quia mollitia nisi dolorem laboriosam. fugit labore quos?</p>

          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero veritatis error, culpa ut totam magni nemo sunt, dolor non eaque accusamus ad cupiditate praesentium esse corrupti officia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore exercitationem, impedit quae minus magnam consectetur quia mollitia nisi dolorem laboriosam. fugit labore quos?</p>
          <div className='flex flex-col gap-3'>
            
          <h1 className='font-medium text-xl text-black '>Our Mission</h1>
            <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero veritatis error, culpa ut g elit. Labore exercitationem, impedit quae minus magnam consectetur quia mollitia nisi dolorem laboriosam. fugit labore quos?</p>
          </div>
        </div>

      </div>

    </div>




    <div className='my-30  sm:px-10 px-2 flex  flex-col gap-3'>
      <div className='text-center'>
        <Title text1={"Why"} text2={"Choose Us"}/>
      </div>

      <div className='flex gap-6 flex-col sm:flex-row '>

        <div className='border border-gray-300 px-4 rounded-3xl  sm:px-20 sm:w-150 w-full flex flex-col gap-4 py-10'>
        <b className='text-xl'>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate quisquam ipsam eius dolore tempore ipsa ullam, labore eveniet esse.</p>
        </div>

       
        <div className='border border-gray-300 px-4 rounded-3xl  sm:px-20 sm:w-150 w-full flex flex-col gap-4 py-10'>
        <b className='text-xl'>Convenience</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate quisquam ipsam eius dolore tempore ipsa ullam, labore eveniet esse.</p>
        </div>

       
        <div className='border border-gray-300 px-4 rounded-3xl  sm:px-20 sm:w-150 w-full flex flex-col gap-4 py-10'>
        <b className='text-xl'>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate quisquam ipsam eius dolore tempore ipsa ullam, labore eveniet esse.</p>
        </div>

       


      </div>

    </div>


    <div className=''>
      <NewsLetterBox/>
    </div>
</>


</div>
  )
}

export default About
