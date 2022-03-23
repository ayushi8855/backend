const express = require("express")
const connect =require("./configs/db")
const { body, validationResult } = require("express-validator")
const usercontroller = require("./controller/user.cont")
const {register,login}=require("./controller/auth.cont")
const productcontroller = require("./controller/productcont")
const app = express();
app.use(express.json());
app.use("/user",usercontroller)
app.post("/register",body("email").not().isEmpty(),body("password").not().isEmpty(),body("name").not().isEmpty(),register)
app.post("/login",body("email").not().isEmpty(),body("password").not().isEmpty(),login)
app.use("/product",productcontroller)



app.listen(5000,async()=>{
    try {
        await connect()
        console.log("listining to 5000")
    } catch (error) {
        console.log(error.message)
    }
})
module.exports=app