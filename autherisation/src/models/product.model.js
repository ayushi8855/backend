// const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")
const productSchema=mongoose.Schema({
    title:{type:String,require:true},
    body:{type:String,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    
})
const Product=mongoose.model("product",productSchema)
module.exports=Product