const express=require("express")
const mongoose=require("mongoose")
const router=require("./config/routes")
const cors=require("cors")
const dbsetup = require("./config/database")
const app=express()
//db setup
dbsetup()
app.use(express.json())
app.use(cors())

app.use("/",router)
const port=3030
app.listen(port,()=>{
    console.log(port,"listening on port")
})
