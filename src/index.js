// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/database.js";

dotenv.config({
    path: './env'
})

connectDB();














// method 1
// function coonectDB(){}

// connectDB()


/* method 2
import express from "express";
const app = express();

( async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error ",(error)=>{
            console.log("errr: ",error);
            throw error
            
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("error : ",error)
        throw err
    }
})()

*/