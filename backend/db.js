
import mongoose, { mongo, Schema } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DB_URL).then((res)=>{
    console.log("database connected succesfully")
}).catch((e)=>{
    console.log("database connectivity fails")
})

const UserSchema = new Schema({
        username: {type: String, unique:true, required:true},
        email: {type:String, unique:true, required:true, lowercase:true},
        password: {type:String, required:true}
})

const TodoSchema = new Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    todo: {type:String, required:true},
    completed: {type:Boolean,default:false}
})

export const User = mongoose.model('User', UserSchema);
export const Todos = mongoose.model("Todo", TodoSchema)