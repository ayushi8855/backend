const mongoose=require("mongoose")
const bcrypt =require("bcrypt")
const userSchema=new mongoose.Schema({

  name:{type:String},
  email:{type:String,unique:true},
    password:{type:String},
    
    



},
{
    timeStamp:true,
    versionKey:false,
}
)
 userSchema.pre("save",function(next){
  //  console.log(this.password)
  const hash = bcrypt.hashSync(this.password, 8);
  this.password=hash
  return next()
 })
userSchema.methods.checkPassword=function(password){
return bcrypt.compareSync(password,this.password)
}
const User= mongoose.model("user",userSchema)

module.exports=User