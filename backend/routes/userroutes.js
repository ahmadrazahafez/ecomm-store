import {userlogin,userregister,useradmin} from "../controllers/usercontroller.js";

import express from "express"

const userrouter = express.Router()


userrouter.post("/register",userregister)
userrouter.post("/login",userlogin)
userrouter.post("/admin",useradmin)



export default userrouter













