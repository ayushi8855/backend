const express=require("express")

const User=require("../models/usermodel")

const { body, validationResult } = require("express-validator")

const router=express.Router()

router.post("/",

body("first_name").not().isEmpty().withMessage("first name can not be empty")
,body("last_name").not().isEmpty().withMessage("last name can not be empty"),
body("email").not().isEmpty().withMessage("email can not be empty").isEmail().custom(async(value)=>{
    const user =await User.findOne({email:value})
    if(user){
        throw new Error("email is already registered")
    }
    return true
}), 
body("pincode").not().isEmpty().withMessage("pincode can not be empty").isNumeric().custom((value)=>{
    if(value.length!=6){
        throw new Error("valid pin is required")
    }
    return true
}),
body("age").not().isEmpty().isNumeric().custom((value)=>{
   if(value<1||value>100){
       throw new Error("incorrect age ")
   }
   return true
})  ,
body("gender").not().isEmpty().withMessage("gender can not be empty").custom((value)=>{
    if(value=="Male"||value=="Female"||value=="Others"){
       return true

    }
    throw new Error("not a valid gender")
}),

async(req,res)=>{

   
    try {
          
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
      

        const user=await User.create(req.body)
       return res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err.message)
    }



})

module.exports=router