const authorised =(permittedrole)=>{
    return (req,res,next)=>{
        const user =req.user
       let ispermitted =false
       
       permittedrole.map((role)=>{
        // console.log(user)
          if(user.role.includes(role)) {
              ispermitted=true
              
          }
       })
       if(ispermitted){
           return next()
       }
       else{
           return res.status(401).send("not authorised")
       }
    }
}
module.exports=authorised