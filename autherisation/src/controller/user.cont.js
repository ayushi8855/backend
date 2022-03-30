const express = require("express")

const router = express.Router();
// const authorisation =require("../middleware/authorisation")
const authenticate =require("../middleware/authenticate")
const User =require("../models/user.model")

router.post("",async(req,res)=>{
    try {
        let user = await User.create(req.body)
     return   res.send(user)
    } catch (error) {
        return   res.send(error)
    }
})
router.get("",authenticate,async(req,res)=>{
    try {
        let user = await User.find()
     return   res.send(user)
    } catch (error) {
        return   res.send(error)
    }
})
module.exports = router;