const express=require("express")
const app=express()
// const router=express.Router()
const Student=require("../models/studmod")

// 
app.get("/:id",async(req,res)=>{
    try {
        const student= await Student.findById(req.params.id).lean().exec()

       return res.status(200).send(student)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
app.get("",async(req,res)=>{
    try {
        const student= await Student.find().populate({path:"evaluation_id"}).lean().exec()

       return res.status(200).send(student)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async(req,res)=>{
    try {
        const student= await Student.create(req.body);
      return  res.status(201).send(student)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports=app
