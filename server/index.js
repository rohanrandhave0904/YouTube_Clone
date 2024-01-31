import express from 'express'
import mongoose from 'mongoose'
import dontenv from "dotenv"
const app=express()
dontenv.config()
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{ }).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})