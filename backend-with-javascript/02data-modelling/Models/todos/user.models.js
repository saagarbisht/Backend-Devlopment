import { Schema, model } from "mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"user name required"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password required"], 
    },
},{timestamps:true});

export const User = model("User",userSchema);