const express=  require("express")
const User=require("../models/user.model")

const router = express.Router()
const transporter= require("../configs/mail")

router.post("/",async(req,res)=>{
    try {
        const user = await User.create(req.body)
        await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to:user.email, // list of receivers
                subject: `Welcome to ABC system ${user.first_name}`, // Subject line
                text: `hey${user.first_name}`, // plain text body
                html: `<b>hey${user.first_name}</b>`, // html body
              });


    res.status(201).send({message:"email created sucessfully"})
    
    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: [
            { name: "admin Name 1", address: "admin1@example.com" },
            { name: "admin Name 2", address: "admin2@example.com" },
            { name: "admin Name 3", address: "admin3@example.com" },
            { name: "admin Name 4", address: "admin4@example.com" },
            { name: "admin Name 5", address: "admin5@example.com" }
          ], // list of receivers
        subject: `Welcome to ABC system ${user.first_name}`, // Subject line
        text: `hey${user.first_name}`, // plain text body
        html: `<b>hey${user.first_name}</b>`, // html body
      });

    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}
)
router.get("/",async(req,res)=>{
    try {
      const page = req.query.page||1;
      const pagesize = req.query.pagesize||10

      
      const skip =(page-1)*pagesize

      
        const user = await User.find().skip(skip).limit(pagesize).lean().exec()

        const totalPages =Math.ceil((await User.find().countDocuments())/pagesize)
        
    return res.status(201).send({user,totalPages})

    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}
)
module.exports=router