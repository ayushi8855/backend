const express = require("express")
const app =express();
app.use(express.json())
const usercontroller=require("./controller/user.controller")
app.use("/user",usercontroller)
app.use("/multiple",usercontroller)
module.exports=app
