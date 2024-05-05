import { Schema, model } from "mongoose"

const productSchema = new Schema({
    description : {
        type : String,
        required : true,
    },
    name : {
        type:String,
        required:true,
    },
    productImage : {
        type : String,
    },
    price : {
        type : Number,
        default : 0
    },
    stock : {
        type : Number,
        default : 0
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : "Category"
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

export const Product = model("Product",productSchema);