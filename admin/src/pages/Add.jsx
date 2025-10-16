import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {
    const [image1, setimage1] = useState(null)
    const [image2, setimage2] = useState(null)
    const [image3, setimage3] = useState(null)
    const [image4, setimage4] = useState(null)

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("Men")
    const [subcategory, setsubcategory] = useState("Topwear")
    const [price, setprice] = useState("")
    const [bestseller, setbestseller] = useState(false)
    const [sizes, setsizes] = useState([])


   const submitted = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Append text fields
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("bestseller", bestseller);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("date", Date.now());

    // Append images if selected
    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    // Get token (assuming you stored it in localStorage after login)
    const token = localStorage.getItem("token");

    const res = await fetch("https://ecomm-backend-chi.vercel.app/api/product/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ send token properly
      },
      body: formData, // ✅ FormData automatically sets correct headers
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      alert("✅ Product added successfully!");
      setname("")
    //   setdescription("")
      setimage1(false)
      setimage2(false)
      setsizes([])
      setimage3(false)
      setimage4(false)
      setbestseller(false)
      setprice("")
    } else {
      alert(`❌ Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Upload error:", error);
    alert("Something went wrong!");
  }
};




  return (
    <div className=''>
        <form onSubmit={submitted}>
            <div className='flex flex-col w-130 gap-4 mx-15 my-20'>
            <p className='text-xl font-medium'>Upload Image</p>

            <div className='flex gap-2 w-full'>

                <label htmlFor="img1">
                <img src={image1&&URL.createObjectURL(image1)} className='border w-20 h-20 bg-center cursor-pointer px-2 py-1' alt="Upload1" />
                <input onChange={(e)=>setimage1(e.target.files[0])} type="file" placeholder=''  id='img1' hidden />
            </label>

                <label htmlFor="img2">
                <img src={image2&&URL.createObjectURL(image2)} className='border w-20 h-20 bg-center cursor-pointer px-2 py-1' alt="Upload2" />
                <input onChange={(e)=>setimage2(e.target.files[0])} type="file" placeholder=''  id='img2' hidden />
            </label>

                <label htmlFor="img3">
                <img src={image3&&URL.createObjectURL(image3)} className='border w-20 h-20 bg-center cursor-pointer px-2 py-1' alt="Upload3" />
                <input onChange={(e)=>setimage3(e.target.files[0])} type="file" placeholder=''  id='img3' hidden />
            </label>

                <label htmlFor="img4">
                <img src={image4&&URL.createObjectURL(image4)} className='border w-20 h-20 bg-center cursor-pointer px-2 py-1' alt="Upload4" />
                <input onChange={(e)=>setimage4(e.target.files[0])} type="file" placeholder=''  id='img4' hidden />
            </label>


            </div>

        <div className='w-full mt-5'>
            <h1 className='font-medium text-xl my-2'>Product Name:</h1>
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder='Name' className=' w-full px-2 py-2 border text-gray-600 font-medium border-gray-300' required/>
        </div>



        <div className='w-full mt-2'>
            <h1 className='font-medium text-xl my-2'>Description:</h1>
            <textarea value={description} onChange={(e)=>setdescription(e.target.value)} type="text" className='border w-full px-2 font-medium text-gray-600 py-1 h-22 border-gray-300' required/>
        </div>


        <div className=' flex mt-5 gap-10'>

            <div className='flex flex-col gap-1'>
                <p className='font-medium'>Product Category</p>
                <select onChange={(e)=>setcategory(e.target.value)} className='border-2 focus:border-pink-300 outline-none px-3 w-full border-gray-300 py-1'>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>
           

            <div className='flex flex-col gap-1'>
                <p className='font-medium'>Product Subategory</p>
                <select onChange={(e)=>setsubcategory(e.target.value)} className='border-2 focus:border-pink-300 outline-none px-3 w-full border-gray-300 py-1'>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>
           

            <div className='flex flex-col gap-1'>
                <p className='font-medium'>Product Price</p>
                <input onChange={(e)=>setprice(e.target.value)} value={price} type="number" className='border border-gray-300 focus:border-pink-300 outline-none w-25 px-1 py-1'/>
            </div>
           
        </div>


        <div className='flex flex-col gap-2'>
            <p className='text-[18px] font-medium'>Product Sizes</p>
            
        <div className='flex gap-4'>

            <div onClick={()=>setsizes(prev=>prev.includes("S") ? prev.filter(item => item!=="S") : [...prev,"S"])} className={`bg-gray-200 cursor-pointer w-8 h-8 ${sizes.includes("S")?"bg-pink-100":"bg-slate-100"}`}>
                <p className='text-sm text-center py-2 px-2'>S</p>
            </div>

            <div onClick={()=>setsizes(prev=>prev.includes("M") ? prev.filter(item => item!=="M") : [...prev,"M"])}  className={`bg-gray-200 cursor-pointer w-8 h-8 ${sizes.includes("M")?"bg-pink-100":"bg-slate-100"}`}>
                <p className='text-sm text-center py-2 px-2'>M</p>
            </div>

            <div onClick={()=>setsizes(prev=>prev.includes("L") ? prev.filter(item => item!=="L") : [...prev,"L"])}  className={`bg-gray-200 cursor-pointer w-8 h-8 ${sizes.includes("L")?"bg-pink-100":"bg-slate-100"}`}>
                <p className='text-sm text-center py-2 px-2'>L</p>
            </div>

            <div onClick={()=>setsizes(prev=>prev.includes("XL") ? prev.filter(item => item!=="XL") : [...prev,"XL"])}  className={`bg-gray-200 cursor-pointer w-8 h-8 ${sizes.includes("XL")?"bg-pink-100":"bg-slate-100"}`}>
                <p className='text-sm text-center py-2 px-2'>XL</p>
            </div>

            <div onClick={()=>setsizes(prev=>prev.includes("XXL") ? prev.filter(item => item!=="XXL") : [...prev,"XXL"])}  className={`bg-gray-200 cursor-pointer w-8 h-8 ${sizes.includes("XXL")?"bg-pink-100":"bg-slate-100"}`}>
                <p className='text-sm text-center py-2 px-1'>XXL</p>
            </div>
            
            
        </div>

        </div>


        <div  className='flex gap-1 text-[19px] mt-4'>
            <input onClick={()=>setbestseller(!bestseller)} checked={bestseller} type="checkbox" className='w-4' id='checkbox' />
            <label htmlFor="checkbox" className='cursor-pointer'>Add to Bestseller</label>
        </div>
        <div>
            {bestseller===true?"true":"false"}
        </div>

        <div className='w-30'>
            <button type='submit' className='bg-black w-full text-white text-2xl px-4 py-1 cursor-pointer'>Add</button>
        </div>


        </div>
        </form>
    </div>
  )
}

export default Add
