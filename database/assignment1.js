// mongodb+srv://ayushi8855:Ayujaman675@cluster0.gubi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://ayushi8855:<password>@cluster0.pmdxw.mongodb.net/test
const express = require("express")
// const { append } = require("express/lib/response")
// console.log(express)
const app =express()
app.use(express.json())
const mongoose =require("mongoose")
const connect =()=>{
    return mongoose.connect("mongodb+srv://ayushi8855:Ayujaman675@cluster0.aldkx.mongodb.net/web15?retryWrites=true&w=majority")
}

const userSchema =new mongoose.Schema({
    first_name : {type:String,required:true},
    last_name : {type:String,required:false},
    phn_no :{type:Number},
    password: {type:String,required:true},
  email: {type:String,required:true,unique:true},

},{timestamps:true})

const User= mongoose.model("user",userSchema)

const bookschema =new mongoose.Schema({
  sectionID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"section",
    required:true
    
  },
 title:{type:String,required:true}
},{
  timestamps:true,
  versionKey:false,
}
)
const Book =  mongoose.model("book",bookschema)


const sectionschema =new mongoose.Schema({
  Name:{type:String,required:true}
 
},{
  timestamps:true,
  versionKey:false,
}
)
const Section = mongoose.model("section",sectionschema)

const Authorschema =new mongoose.Schema({
  FirstName:{type:String,required:true},
 userId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user",
  required:true
  
},
},{
  timestamps:true,
  versionKey:false,
}
)
const Author = mongoose.model("author",Authorschema)

const BookAuthor =new mongoose.Schema({
 
 bookId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"book",
  required:true
  
},
authorId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"author",
  required:true
  
},
},{
  timestamps:true,
  versionKey:false,
}
)
const Bookauthor = mongoose.model("bookauthor",BookAuthor)


app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.status(200).send( users); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  app.get("/book", async (req, res) => {
    try {
      const book = await Book.find().lean().exec();
  
      return res.status(200).send(book); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  app.get("/bookauthor", async (req, res) => {
    try {
      const bookauthor = await Bookauthor.find().populate({path:"authorId",select:["FirstName"]}).populate({path:"bookId",select:["title"]}).lean().exec();
  
      return res.status(200).send(bookauthor); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });


  app.get("/author", async (req, res) => {
    try {
      const author = await Author.find().lean().exec();
  
      return res.status(200).send(author); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
 


  app.get("/section", async (req, res) => {
    try {
      const section = await Section.find().lean().exec();
  
      return res.status(200).send(section); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.post("/book", async (req, res) => {
    try {
      const book = await Book.create(req.body);
  
      return res.status(201).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.post("/section", async (req, res) => {
    try {
      const section = await Section.create(req.body);
  
      return res.status(201).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.post("/author", async (req, res) => {
    try {
      const section = await Author.create(req.body);
  
      return res.status(201).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.post("/bookauthor", async (req, res) => {
    try {
      const bookauthor = await Bookauthor.create(req.body);
  
      return res.status(201).send(bookauthor);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

app.listen(5000,async()=>{
   try{
       await connect();
       console.log("try")
   }
   catch(err){
       console.log(err)
   }
})
