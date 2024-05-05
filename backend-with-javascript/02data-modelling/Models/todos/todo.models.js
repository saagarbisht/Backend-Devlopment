import {Schema,model} from "mongoose";

const todoSchema = new Schema({

    content : {
        type : String,
        required:true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    subTodos : [
        {
            type : Schema.Types.ObjectId,
            ref : "SubTodo"

        }
    ]

},{timeseries:true})

export const Todo = model("todo",todoSchema)