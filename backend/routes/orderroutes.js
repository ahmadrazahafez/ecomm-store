import express from "express"
import adminauth from "../middleware/adminauth.js"
import userauth from "../middleware/auth.js"

import { allorder,userorder,updatestatus,placeorder } from "../controllers/ordercontroller.js"


const orderrouter = express.Router()


orderrouter.post("/list",adminauth,allorder)
orderrouter.post("/status",adminauth,updatestatus)


orderrouter.post("/place",userauth,placeorder)



orderrouter.post("/userorder",userauth,userorder)





export default orderrouter;

