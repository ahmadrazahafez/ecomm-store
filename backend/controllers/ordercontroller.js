import ordermodel from "../models/ordermodel.js"
import usermodel from "../models/usermodel.js"

const placeorder = async(req,res)=>{

    try{
        const {userid,items,amount,address} = req.body

        const orderdata = {
            userid,
            items,address,amount,paymentmethod:"cod",payment:false,
            date:Date.now()
        }

        const orders = new ordermodel(orderdata)
        await orders.save()

        await usermodel.findByIdAndUpdate(userid,{cartdata:{}})
        res.json({success:true,message:"order placed now"})


    }catch(error){
        res.json({success:false,message:error.message})
    }

}




const allorder = async(req,res)=>{

    try{
        const orders = await ordermodel.find({})
        res.json({success:true,message:"All ordered fetched",orders})
    }catch(error){
        res.json({success:false,message:"Some technical issue"})

    }

}




const userorder = async(req,res)=>{
   try{
     const {userid} = req.body

    const userorder = await ordermodel.find({userid})
        res.json({success:true,userorder})
    }
      
   catch(error){
    return res.json({success:false,message:"some internal error"})
   }

}




const updatestatus = async(req,res)=>{
    try{
        
    const {orderid,status} = req.body

    await ordermodel.findByIdAndUpdate(orderid,{status})
    res.json({success:true,message:"updated status"})

    }catch(error){
        res.json({success:false,message:error.message})
    }
    

}


export {updatestatus,placeorder,userorder,allorder}



