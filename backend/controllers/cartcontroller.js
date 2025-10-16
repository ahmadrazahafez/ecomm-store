import usermodel from "../models/usermodel.js"



const addtocart = async(req,res)=>{
    const {userid , itemid , size} = req.body 

    const userdata = await usermodel.findById(userid)
     let cartdata = userdata.cartdata

     if(cartdata[itemid]){
        if(cartdata[itemid][size]){
            cartdata[itemid][size] += 1
        }else{
            cartdata[itemid][size] = 1

        }
     }else{
        cartdata[itemid] = {}
        cartdata[itemid][size] = 1
     }

     await usermodel.findByIdAndUpdate(userid,{cartdata})
     res.json({success:true,message:"product addedd database"})
    
}


const removedatacart = async (req, res) => {
    try {
        const { userid, itemid, size } = req.body;

        const userdata = await usermodel.findById(userid);
        let cartdata = userdata.cartdata;

        if (cartdata[itemid]) {
            if (cartdata[itemid][size]) {
                delete cartdata[itemid][size]; // remove that size

                // if no sizes remain for that product, remove the product key entirely
                if (Object.keys(cartdata[itemid]).length === 0) {
                    delete cartdata[itemid];
                }
            } else {
                return res.json({ success: false, message: "Size not found in cart" });
            }
        } else {
            return res.json({ success: false, message: "Item not found in cart" });
        }

        await usermodel.findByIdAndUpdate(userid, { cartdata });

        res.json({ success: true, message: "Item removed from cart" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const getusercart = async(req,res)=>{

    try{
        const {userid} = req.body

    const userdata = await usermodel.findById(userid)
    const cartdata = userdata.cartdata
    res.json({success:true,message:"cart gettig by data base",cartdata:cartdata})

    }catch(error){
        res.json({success:false,message:error.message})
    }
}




export {addtocart,getusercart,removedatacart}














