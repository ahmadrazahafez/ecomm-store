import React, { useEffect ,useState} from 'react'
import { assets } from '../assets/assets'

const List = () => {
    const [list, setlist] = useState([])
    const token = localStorage.getItem("token")

    const removerproduct = async(id)=>{
        const confirm = window.confirm("sure to delete")
        if(!confirm){
            return 
        }

        const dataa = await fetch(`https://ecomm-backend-chi.vercel.app/api/product/delete`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({productid:id})
        })
        const data = await dataa.json()
        if(data.success===true){
            alert(data.message)
            getproduct()
        }
    }

    const getproduct = async()=>{
        const res = await fetch("https://ecomm-backend-chi.vercel.app/api/product/get",{
            method:"GET",
        })
        const data = await res.json()
        if(data.success===true){
            setlist(data.dataa)

        }else{
            alert(data.message)
        }
    }

    useEffect(() => {
        getproduct()
    }, [])
    
    


  return (
    <div className='w-full px-20  mt-7'>
        <p className='text-3xl underline font-medium'>Product List</p>
        
        <div className='flex flex-col'>

            <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr] mt-10 px-4 text-xl text-red-600'>
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b className=''>Action</b>
            </div>

            {/* listing product */}

          <div className='mt-4'>
              {list&&list.map((item,i)=>{
                return <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr] px-4 my-3 bg-gray-50 border-t border-gray-300 items-center'>
                    <img className='w-20' src={item.image[0]} alt="" />
                    <p className='font-medium text-gray-700'>{item.name}</p>
                    <p className='font-medium text-gray-700'>{item.category}</p>
                    <p className='font-medium text-gray-700'>${item.price}</p>
                    <p className='text-2xl ml-8 cursor-pointer' onClick={()=>removerproduct(item._id)}>X</p>
                </div>
                
            })}
          </div>

            
        </div>
    </div>
  )
}

export default List
