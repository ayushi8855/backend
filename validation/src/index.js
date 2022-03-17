const express=require("express")

const app=express();
const usercontroller=require("./controller/usercontroller")
app.use(express.json())
app.use("/users",usercontroller)


module.exports=app