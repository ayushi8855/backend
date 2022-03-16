const express=require("express")
const app=express()
// const router=express.Router()
const Batch=require("../models/batchmod")


app.get("/:id",async(req,res)=>{
    try {
        const batch= await Batch.findById(req.params.id).lean().exec()

       return res.status(200).send(batch)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
app.get("",async(req,res)=>{
    try {
        const batch= await Batch.find().lean().exec()

       return res.status(200).send(batch)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

app.post("",async(req,res)=>{
    try {
        const batch= await Batch.create(req.body);
      return  res.status(201).send(batch)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


module.exports=app