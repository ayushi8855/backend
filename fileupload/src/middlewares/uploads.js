
const multer=require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file,  callback) {
        console.log({file})
        callback(null, path.join(__dirname,"../gallery"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now()
      callback(null, uniquePrefix + '-' + file.originalname)
    }
  })
  
  const fileFilter= (req, file, callback)=> {

    // The function should call `callback` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){

        callback(null, true)

    }
    else{
      // To accept the file pass `true`, like so:
      callback(null, false)

  }
  
  
    // You can always pass an error if something goes wrong:
    // callback(new Error('I don\'t have a clue!'))
  
  }

const option= multer({

storage:storage,

fileFilter:fileFilter,

limits:{
    filesize:1024*1024*5
},

})

const uploads=multer(option)
module.exports=uploads