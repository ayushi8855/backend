


require("dotenv").config()
const jwt=require("jsonwebtoken")

const authenticate=async(req,res,next)=>{
    if(! req.headers.authorization){
        return res.status(401).send("athurisation not found")
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(401).send("authorisation not found")
    }
    const token=req.headers.authorization.trim().split(" ")[1]
    // console.log(token)
    let decoded;
    try {
         decoded=await verifyToken(token)
    } catch (error) {
       return res.send(error.message)
    }
   
    req.userId=decoded.user._id

    return next()
}
const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
 var decoded=jwt.verify(token,"masaischool",(err,decoded)=>{
            if(err){
                return reject(err)
            }
            else{
                return resolve(decoded)
            }

    })
  })
}
module.exports=authenticate