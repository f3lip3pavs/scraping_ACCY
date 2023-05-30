const route = require('express').Router()
const multer = require('multer')
const {getParsedBody} = require('./scrap')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'-'+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

const list = []

route.post('/up', upload.single('file'), (req, res, next) => {
        
        try{
          console.log(req.file.filename)
          getParsedBody('https://brandmark.io/logo-rank/', req.file.filename)
          .then(res => {
            list.push(...res)
            setTimeout(()=>{console.log(list)}, 10000)
            return list
          })
            res.send(req.file)
        }catch(err){
            console.log(err)
        }
})



module.exports = route