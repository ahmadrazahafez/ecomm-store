import express from "express"
import {addproduct,removeproduct,singleproduct,listproduct} from "../controllers/productcontroller.js"
import upload from "../middleware/multer.js"
import adminauth from "../middleware/adminauth.js";


const productrouter = express.Router()



productrouter.post("/add",adminauth,upload.fields(
    [
        {name:"image1",maxCount:1},
        {name:"image2",maxCount:1},
        {name:"image3",maxCount:1},
        {name:"image4",maxCount:1},
    ]
),addproduct)

productrouter.get("/get",listproduct)
productrouter.delete("/delete",adminauth,removeproduct)
productrouter.get("/getsingle",singleproduct)



export default productrouter

