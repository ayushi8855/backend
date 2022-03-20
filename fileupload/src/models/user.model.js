const mongoose= require("mongoose")
const userSchema=new mongoose.Schema({

 
    firstName:{type:String,required:true},
    lastName:{type:String},
    // gender:{type:String,default:"female",enum:["male","female"]},
    // dateOfBirth:{type:Date,required:true},
    // type:{type:String,required:true},
    profilePic:[{type:String,required:false}]



},{
    timeStamp:true,
    versionKey:false,
}
)
const User=mongoose.model("user",userSchema)

module.exports=User