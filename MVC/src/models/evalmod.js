const mongoose=require("mongoose")


const evalSchema=new mongoose.Schema({

 
    date_of_evaluation:{type:Date,default:Date.now},
    instructor:{type:String,required:true},
    batch_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required:true
    },
  

},
{
    timeStamp:true,
    versionKey:false,
}
)


const Evaluation= mongoose.model("evaluation",evalSchema)

module.exports=Evaluation