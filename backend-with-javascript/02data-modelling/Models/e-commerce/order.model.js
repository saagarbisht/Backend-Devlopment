import { Schema, model } from "mongoose"

const orderItemSchema = Schema({
    productId : {
        type : Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type : Number,
        required : true
    }
})

const orderSchema = new Schema({
    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems : {
        type : [orderItemSchema]
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["Pending","Cancelled"," Delivered"],
        default : "Pending"
    }
},{timestamps:true});

export const Order = model("Order",orderSchema);