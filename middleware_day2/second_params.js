const express=require("express")

const app=express()

app.get("/book/:name",oneBook,(req,res)=>{
      res.send({bookName:req.name})
})

function oneBook(req,res,next){
 
       req.name=req.params["name"]
        console.log(req.name)
     next()
   
    
}
app.listen(4000,()=>{
    console.log("listening at 4000")
})