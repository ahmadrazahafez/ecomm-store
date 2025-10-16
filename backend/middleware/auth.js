import jwt from "jsonwebtoken"



const userauth = (req,res,next)=>{
    const {token} = req.headers

    if(!token){
        return res.json({succeess:false,message:"token is not available"})
    }

    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    if (!req.body) req.body = {};
    req.body.userid =token_decode.id
    next()
}



export default userauth








