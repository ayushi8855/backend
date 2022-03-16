const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({

 
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,default:"female",enum:["male","female"]},
    dateOfBirth:{type:Date,required:true},
    type:{type:String,required:true},
    



},
{
    timeStamp:true,
    versionKey:false,
}
)


const User= mongoose.model("user",userSchema)

module.exports=User