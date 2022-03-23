const express=require("express")
const router = express.Router();
const authenticate =require("../middleware/authenticate")
const Product=require("../models/product.model")


router.post("",authenticate,async(req,res)=>{
   req.body.userId=req.userId
    try {
        const product= await Product.create(req.body);
      return  res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.patch("/:id",authenticate,async(req,res)=>{
  req.body.userId=req.userId
   try {
       const product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     return  res.status(201).send(product)
   } catch (error) {
       return res.status(500).send({error:error.message})
   }
})
router.delete("/:id",authenticate,async(req,res)=>{
  req.body.userId=req.userId
   try {
       const product= await Product.findByIdAndDelete(req.params.id,req.body).lean().exec();
     return  res.status(201).send(product)
   } catch (error) {
       return res.status(500).send({error:error.message})
   }
})
router.get("",async(req,res)=>{
  req.body.userId=req.userId
   try {
       const product= await Product.find().lean().exec();
     return  res.status(201).send(product)
   } catch (error) {
       return res.status(500).send({error:error.message})
   }
})
module.exports=router