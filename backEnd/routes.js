const route = require('express').Router()
const multer = require('multer')
const {getParsedBody} = require('./scrap')
const file = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'-'+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

let list = []

route.post('/up', upload.single('file'), (req, res, next) => {
        
        try{
          console.log('arquivo enviado para porta 3001')
          console.log(req.file)
          getParsedBody('https://brandmark.io/logo-rank/', req.file.filename)
          .then(res => {
            list.push(...res)
            setTimeout(()=>{console.log(list)}, 3000)
            file.unlink(`files/${req.file.path.slice(6)}`, (err)=>{
              if(err)
                console.log(err)
            })
            return list
          })
            res.send('arquivo enviado para porta 3001')
            list = []
        }catch(err){
            console.log(err)
        }
})



module.exports = route