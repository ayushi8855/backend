// just for connection (configuration)
const mongoose=require("mongoose")  


const connect=()=>{

    return mongoose.connect("mongodb+srv://ayushi8855:Ayujaman675@cluster0.lff3t.mongodb.net/mvc")


}
module.exports=connect