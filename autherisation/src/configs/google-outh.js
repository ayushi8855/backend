const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const passport=require("passport");
 const {v4:uuidv4}=require("uuid")
const User = require('../models/user.model');
 require("dotenv").config()
//  console.log(process.env.GOOGLE_CLIENT_ID)
passport.use(new GoogleStrategy({
    clientID: "753504213764-8qkj921cv27r7t60tselkg4r92ttjsim.apps.googleusercontent.com",
    // clientID : "326609952742-23rlivv4vegq5qu9ou8ehgsl0vsf61hu.apps.googleusercontent.com",
    // clientSecret : "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",

    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    let user= await User.findOne({email:profile?._json?.email}).lean().exec()
    if(!user){
      user = await User.create({
        email:profile._json.email,
        password:uuidv4(),
        role:["customer"]
      })
    }
      return cb(null, user);
   
  }
));
module.exports=passport