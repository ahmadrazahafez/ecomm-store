import express from "express"
import userauth from "../middleware/auth.js"

import { addtocart,getusercart, removedatacart } from "../controllers/cartcontroller.js"

const cartrouter = express.Router()


cartrouter.post("/add",userauth,addtocart)
cartrouter.post("/remove",userauth,removedatacart)
cartrouter.post("/get",userauth,getusercart)



export default cartrouter