import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../Components/ProductItem'

const Collection = () => {
  const [show, setshow] = useState(false)
  const { productss } = useContext(ShopContext)
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [filterproduct, setfilterproduct] = useState([])
  const [sorttype, setsorttype] = useState("relavent")
  const [loading, setloading] = useState(true)


  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setsubcategory(prev => [...prev, e.target.value])
    }
  }

  const applyfilter = () => {
    let productcopy = productss

    if (category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category))
    }
    if (subcategory.length > 0) {
      productcopy = productcopy.filter(item => subcategory.includes(item.subcategory))
    }

    setfilterproduct(productcopy)
  }

  const sortproduct = () => {
    let fpcopy = filterproduct.slice()
    switch (sorttype) {
      case "Low-High":
        setfilterproduct(fpcopy.sort((a, b) => (a.price - b.price)))
        break;
      case "High-Low":
        setfilterproduct(fpcopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyfilter()
        break

    }

  }


  useEffect(() => {
    applyfilter()

  }, [category, subcategory])


  useEffect(() => {
    sortproduct()

  }, [sorttype])




  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
      setfilterproduct(productss)
    }, 1000);
    return () => clearTimeout(timer)
  }, [productss])

  return (
    <>
      <div className='flex sm:flex-row flex-col ml-6 my-10'>

        <div className='min-w-70'>
          <p onClick={() => setshow(!show)} className='text-3xl font-light font-serif items-center flex cursor-pointer text-center m-auto my-6 gap-2 '>
            Filter
            <img className={`w-2 ${show ? "rotate-90" : ""} sm:hidden`} src={assets.dropdown_icon} alt="" />
          </p>

          {/* category box */}
          <div className={`border border-gray-400 w-60 pl-5 my-3 py-3 sm:flex flex-col gap-3  ${show ? "" : "hidden"} `}>
            <p className='font-medium text-xl'>Categories</p>
            <div className='text-gray-500'>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Men"} onChange={togglecategory} />Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Women"} onChange={togglecategory} />Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Kids"} onChange={togglecategory} />Kids
              </p>
            </div>

          </div>

          {/* subcategory box */}
          <div className={`border border-gray-500 w-60 pl-5 my-3 py-3 sm:flex flex-col gap-3 ${show ? "" : "hidden"}`}>
            <p className='font-medium text-xl'>Types</p>
            <div className='text-gray-500'>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Topwear"} onChange={togglesubcategory} />TopWear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Bottomwear"} onChange={togglesubcategory} />BottomWear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={"Winterwear"} onChange={togglesubcategory} />WinterWear
              </p>
            </div>

          </div>





        </div>


        {/* Right side */}
        <div className=''>
          <div className=' flex sm:flex-row flex-col justify-between w-full text-sm'>
            <Title text1={"All"} text2={"Collection"} />
            <select onChange={(e) => { setsorttype(e.target.value) }} className='mr-10 border border-gray-400 px-2 max-w-50 sm:w-full' name="" id="">
              <option className='w-30' value="relavent">sort by: relevent</option>
              <option value="Low-High">sort by: Low to High</option>
              <option value="High-Low">sort by: High to Low</option>
            </select>

          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 px-4 py-6'>
            {loading ?
              (
                <div>Loading.....</div>
              ) : (
                filterproduct.map((item, index) => {
                  return <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                })
              )

            }

          </div>

        </div>


      </div>
    </>
  )
}

export default Collection
