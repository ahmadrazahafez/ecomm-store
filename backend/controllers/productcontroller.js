import productmodel from "../models/productmodel.js"
import {v2 as cloudinary} from "cloudinary"



const addproduct = async(req,res)=>{
    try{
        const {name,description,price,category,subcategory,sizes,bestseller,date} = req.body

        const image1 =req.files.image1 && req.files.image1[0]
        const image2 =req.files.image2 && req.files.image2[0]
        const image3 =req.files.image3 && req.files.image3[0]
        const image4 =req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((i)=>i!==undefined)

        let imgurl = await Promise.all(
            images.map(async(i)=>{
                let res = await cloudinary.uploader.upload(i.path,{resource_type:"image"})
                return res.secure_url
            })
        )

        const productadd = await productmodel.create({name,description,category,price,subcategory,bestseller:bestseller==="true"?true:false,sizes:JSON.parse(sizes),image:imgurl,date: new Date()})






        res.json({success:true,message:"product addedd",productadd})


    }catch(error){
        console.log("error is start from here ===============",error)
        return res.json({success:false,message:error.message})
    }

}



const removeproduct = async(req,res)=>{
    try{
        const {productid} = req.body
        const removeproducts = await productmodel.findByIdAndDelete(productid)
        if(!removeproducts){
            return res.json({success:false,message:"data not available"})
        }
        res.json({success:true,message:"product removed"})
    }catch(error){
        res.json({success:false,error:error.message})
    }

}



const listproduct = async(req,res)=>{
    try{
        
    const listproducts = await productmodel.find({})
    res.json({success:true,dataa:listproducts,message:"data getting successfuly"})
    }catch(error){
        res.json({success:false,message:error.message})
    }

}


const singleproduct = async(req,res)=>{
    try{
        const {productid} = req.body
        const singleproduct = await productmodel.findById(productid)
        res.json({success:true,singledata:singleproduct})
    }catch(error){
        res.json({success:false,error:error.message})
    }

}




export {addproduct,removeproduct,listproduct,singleproduct}