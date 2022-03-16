const express=require("express")
const app=express()
// const router=express.Router()
const User=require("../models/usermod")


app.get("",async(req,res)=>{
    try {
        const user= await User.find().lean().exec()

       return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

app.post("",async(req,res)=>{
    try {
        const user= await User.create(req.body);
      return  res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


module.exports=app
