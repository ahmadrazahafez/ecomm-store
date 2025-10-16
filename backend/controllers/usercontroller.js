import usermodel from "../models/usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator";



const gettoken = (id)=>{
   return jwt.sign({id},process.env.JWT_SECRET)
}




const userregister = async(req,res)=>{
    try{

        
        const {name,email,password} = req.body
        
        const exist = await usermodel.findOne({email})
        
        if(exist){
        return res.json({success:false,message:"user already exist"})

    }
    
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter a valid email"})
    }
    
    if(password.length<8){
        return res.json({success:false,message:"enter storong password"})

    }
    
    const hashpassword = await bcrypt.hash(password,10)

    const user = await usermodel.create({name,email,password:hashpassword})
    
    const token = gettoken(user._id)


    res.json({success:true,token,message:"register nicely"})


}catch(error){
    res.json({success:false,message:error.message})
}
}






const userlogin = async(req,res)=>{
    try{
        const {email,password} = req.body
    const user = await usermodel.findOne({email})
    if(!user){
        return res.json({success:false,message:"user not found"})
    }

    const ismatch = await bcrypt.compare(password,user.password)

    if(ismatch){
        const token = jwt.sign({id :user._id},process.env.JWT_SECRET)
        return res.json({success:true,message:"login successfully",user:user,token:token})

    }else{
        return res.json({success:false,message:"Wrong password"})
    }
    
    

    }catch(error){
        res.json({success:false,message:error.message})
    }
}



const useradmin = async(req,res)=>{
    try{
        const {email,password} = req.body

        if(email!==process.env.ADMIN_EMAIL){
            return res.json({success:false,message:"Email not authorized"})
        }
        if(password!==process.env.ADMIN_PASSWORD){
            
            return res.json({success:false,message:"Password is not authorized"})

        }else{
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
           return res.json({success:true,token})
        
        }
        
        
            
    }catch(err){
        res.json({success:false,err:err.message})
    }
}



export {userlogin,userregister,useradmin}






