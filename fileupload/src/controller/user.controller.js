let arr=[]

const fs = require('fs');
function getFilesInDirectory() {
    console.log("\nFiles present in directory:");
    let files = fs.readdirSync(__dirname);
    files.forEach(file => {
      console.log(file);
    });
  }

const express= require("express")
const path=require("path")
const User= require("../models/user.model")
const router= express.Router()
const upload = require("../middlewares/uploads")
module.exports=router


router.get("",async(req,res)=>{
    try {
        const user= await User.find().lean().exec()

       return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
})
// router.post("",upload.single("profilePic"),async(req,res)=>{
//     try {
//         req.body={firstName:"ayushi",lastName:"jain"}
//         const user= await User.create({
//             firstName:req.body.firstName,
//             lastName:req.body.lastName,
//             profilePic:req.file.path
//         });
//       return  res.status(201).send(user)
//     } catch (error) {
//         return res.status(500).send({error:error.message})
//     }
// })

let count=0

router.post("",upload.single("profilePic"),async(req,res)=>{

    try {
  
       count++
        req.body={firstName:"ayushi"}
         const user= await User.create({
            firstName:req.body.firstName,
            profilePic:req.file.path
           
        });
   
        console.log(count)
        let a=user.profilePic[0]
     
       
        arr.push(a)
        console.log(arr)
          if (count>1){
            
           
              
              fs.unlink(arr[0],(err => {

                
             if (err) console.log(err);
             else {
               console.log("\nDeleted file: example_file.txt");
             
               // Get the files in current directory
               // after deletion
               getFilesInDirectory();
               arr.shift()
             
             }
            
           }));
          }
        
      return  res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


router.post("/multiple",upload.any("profilePic"),async(req,res)=>{
    try {
        const filepath=req.files.map((file)=>{
            return file.path
        })
       
        // req.body={firstName:"ayushi",lastName:"jain"}
        const user= await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            profilePic:req.file.path
        });
      return  res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})




module.exports=router