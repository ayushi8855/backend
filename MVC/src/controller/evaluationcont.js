const express=require("express")
const app=express()
// const router=express.Router()
const Evaluation=require("../models/evalmod")


app.get("/:id",async(req,res)=>{
    try {
        const evaluation= await Evaluation.findById(req.params.id).lean().exec()
       return res.status(200).send(evaluation)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

app.get("",async(req,res)=>{
    try {
        const evaluation= await Evaluation.find().lean().exec()

       return res.status(200).send(evaluation)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})

app.post("",async(req,res)=>{
    try {
        const evaluation= await Evaluation.create(req.body);
      return  res.status(201).send(evaluation)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports=app