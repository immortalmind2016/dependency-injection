import mongoose, { Schema } from "mongoose"
const User=new Schema({
    name:String
})

export default mongoose.model("User",User)