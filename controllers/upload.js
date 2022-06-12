const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     // cb(null, 'storage/images')
     cb(null, 'public/images')
      
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 

      //cb(null, `${file.fieldname}-${uniqueSuffix}.jpg`)
      cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload