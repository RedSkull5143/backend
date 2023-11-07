import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async () =>{
    try{
        const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected DB HOST:${connection.connection.host}`);
    }catch(error){
        console.log("Error", error);
        process.exit(1)
    }
}

export default connectDB;