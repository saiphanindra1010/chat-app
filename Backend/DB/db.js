import mongoose from "mongoose";

const connectDB=async()=>
    {
        try
        {
            const conn=await mongoose.connect("mongodb://localhost:27017")
        console.log("db connected")
        }
        catch(error)
        {
            console.log("error",error)
            process.exit();
        }
    }

export default connectDB