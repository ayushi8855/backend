const express=require("express")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())  //expreress.json convert json body to js object

const connect=require("./config/db")

// const router=express.Router()

const batchcontroll=require("./controller/batchcont")
const studentcontroll=require("./controller/studentcont")
const evaluationcontroll=require("./controller/evaluationcont")
const usercontroll=require("./controller/usercont")
const subcontroll=require("./controller/submissioncont")

app.use("/batch",batchcontroll)
app.use("/student",studentcontroll)
app.use("/evaluation",evaluationcontroll)
app.use("/users",usercontroll)
app.use("/submission",subcontroll)



app.listen(5000,async()=>{
console.log("listening at 5000")
    try {
      await connect()
    } catch (error) {
        console.log(error)
    } 
})