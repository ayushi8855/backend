const express=require("express")

const app=express()

app.get("/books",allBooks,(req,res)=>{
    res.send("one book")
})

function allBooks(req,res,next){
    console.log("Fetching all books")
    next()
}

app.listen(5000,()=>{
    console.log("listining on port 5000 ")
})