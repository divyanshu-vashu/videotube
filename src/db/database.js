import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
var MONGODB_URL="mongodb://localhost:27017"
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // const connectionInstance = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`);
        console.log("MongoDB is Connected Perfectly ");
    } catch (error) {
        console.log("Mongodb connection error ",error);
        process.exit(1);
    }

}

// connectDB();
export default connectDB;