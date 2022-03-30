

// const User = require("../models/user.model")

// const jwt =require('jsonwebtoken')
require('dotenv').config()
// const generate=(user)=>{
//     return jwt.sign({user},process.env.a);
// }
// const register=async(req,res)=>{
//     try {
//         let user =await User.findOne({email:req.body.email})
//         if(user){
//             // throw new Error("email already in use")
//             return res.status(400).send("email already used")
//         }
        // else{ 
//      user = await User.create(req.body)
//         // console.log(user)
//         const token =generate(user)
        
//         return res.status(200).send({user,token})
// }

//     } catch (error) {
//         res.status(400).send({Message:error.Message})
//     }
// }

// const login= async(req,res)=>{
//     try {
//    const user =await User.findOne({email:req.body.email})
//     if(! user){
//         return res.status(400).send("wrong email or password")

//     }
//   const match =  user.checkPassword(req.body.password)
//   if(! match){
//     return res.status(200).send("incorrect")

//   }
  
//   const token =generate(user)
        
//         return res.status(200).send({user,token})

//         // return res.status(200).send("sucessfully login")
//     } catch (error) {
//          res.status(400).send({Message:error.Message})
//     }
// }
// module.exports={register,login}



const {validationResult} = require("express-validator")
const User=require("../models/user.model")
const jwt=require("jsonwebtoken")
// require("dotenv").config()
//we have to remeber masaisecret
const genToken=(user)=>{
    console.log(process.env.SEC_KEY)
    return jwt.sign({user},process.env.SEC_KEY)
   
}

const register= async(req,res)=>{
     try {
// validation
const errors = validationResult(req)
let final = null;

if(!errors.isEmpty()){

  final = errors.array().map((err)=>{
      return {param : err.param, msg : err.msg}
  })

  return res.status(400).send({errors : final });
}



        let user=await User.findOne({email:req.body.email})
          
        if(user){
        return    res.status(401).send("email already exist")
        }
        else{
            const token=genToken(user)
            user= await User.create(req.body)
            return    res.status(201).send({user,token})
        }

        
     } catch (er) {
         res.status(401).send(er.message)
     }

}


const login= async(req,res)=>{
    try {
         
        const user=await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send("incorrect credential")

        }
      
      const match=user.checkPassword(req.body.password)
         
      if(!match){
               return res.status(401).send("wrong password")
            }
            else{
                const token=genToken(user)
                return res.status(401).send({user,token})
            }
       
    } 
    catch (er) {
        res.status(201).send(er.message)
    }

}

module.exports={register,login}





