const express=require("express")
const app=express()
// const router=express.Router()
const Submission=require("../models/submod")

// 
app.get("/:id",async(req,res)=>{
    try {
        const submission= await Submission.findById(req.params.id).lean().exec()

       return res.status(200).send(submission)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
app.get("",async(req,res)=>{
    try {


        const submission= await Submission.find().populate({path:"evaluation_id"}).lean().exec()
        let max=0
        let k;
            for(let i=0;i<submission.length;i++){
                if(submission[i].marks>max){
                    max=submission[i].marks
                     k=i
                }
            }
  
       return res.status(200).send(submission[k])
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
app.post("",async(req,res)=>{
    try {
        const submission= await Submission.create(req.body);
      return  res.status(201).send(submission)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports=app
