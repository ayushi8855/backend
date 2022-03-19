const express = require("express")
const connect= require("./configs/db")
const usercontroller= require("./controller/user.con")
// const { connect } = require("../../validation/src/controller/usercontroller")
const app = express()
app.use(express.json())
app.use("/user",usercontroller)








app.listen(6000,async()=>{
    try {
        await connect()
        console.log("listining to 6000")
    } catch (error) {
        console.log(error.message)
    }
})


