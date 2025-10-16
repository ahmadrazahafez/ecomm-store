import express from "express"
const PORT = process.env.PORT || 4000
import cors from "cors"
import dotenv from "dotenv";
import connectdb from "./config/mongodb.js"
import connectcloudinary from "./config/cloudinary.js"
import userrouter from "./routes/userroutes.js"
import productrouter from "./routes/productroutes.js"
import cartrouter from "./routes/cartroutes.js";
import orderrouter from "./routes/orderroutes.js";

const app = express()
dotenv.config();
connectdb()
connectcloudinary()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use("/api/cart",cartrouter)
app.use("/api/order",orderrouter)
app.use("/api/user",userrouter)
app.use("/api/product",productrouter)


app.get("/",(req,res)=>{
    res.send("api Working success")
})

app.listen(PORT,()=>{
    console.log("server is running at port "+PORT)
})



