import {Schema,model} from "mongoose";

const subTodoSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    completed : {
        type :Boolean,
        default : true
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},{timeseries:true})

export const SubTodo = model("SubTodo",subTodoSchema)