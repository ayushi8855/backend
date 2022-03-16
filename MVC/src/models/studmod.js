const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({

 
    roll_id:{type:String,required:true},
    current_batch:{type:String,required:true},
  
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    }



},
{
    timeStamp:true,
    versionKey:false,
}
)


const Student= mongoose.model("student",studentSchema)

module.exports=Student
