const express = require("express")
const connect =require("./configs/db")
const { body } = require("express-validator")
const usercontroller = require("./controller/user.cont")
const {register,login}=require("./controller/auth.cont")
const productcontroller = require("./controller/productcont")
const app = express();
const passport=require("./configs/google-outh")
app.use(express.json());
app.use("/user",usercontroller)
app.post("/register" 
,body("email").not().isEmpty().withMessage("cant be empty").isEmail().withMessage("enter valid email"),
body("password").not().isEmpty().isLength({min:6}).isLength({max:8}).withMessage("alteast 6 character"),
body("name").not().isEmpty()
,register)

app.post("/login",
body("email").not().isEmpty(),body("password").not().isEmpty(),
login)
app.use("/product",productcontroller)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    
    return res.status(200).send({user:req.user})
  });

app.listen(5000,async()=>{
    try {
        await connect()
        console.log("listining to 5000")
    } catch (error) {
        console.log(error.message)
    }
})
module.exports=app