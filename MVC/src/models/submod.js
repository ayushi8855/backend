const mongoose=require("mongoose")

const subSchema=new mongoose.Schema({

 
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true
    },
    marks:{type:Number,required:true}


},
{
    timeStamp:true,
    versionKey:false,
}
)


const Submission= mongoose.model("submission",subSchema)

module.exports=Submission