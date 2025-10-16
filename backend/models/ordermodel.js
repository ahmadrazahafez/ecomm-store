import mongoose  from "mongoose";


const orderschema = new mongoose.Schema({
    userid:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,required:true,default:"Order Placed"},
    paymentmethod:{type:String,default:"cod"},
    date:{type:Number,required:true}
})


const ordermodel = mongoose.model("orders",orderschema)


export default ordermodel









