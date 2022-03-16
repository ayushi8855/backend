const mongoose=require("mongoose")
const batchSchema=new mongoose.Schema({

  Batch_name:{type:String,required:true},
   


},
{
    timeStamp:true,
    versionKey:false,
}
)


const Batch= mongoose.model("batch",batchSchema)

module.exports=Batch