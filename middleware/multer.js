// app.use('/upload',express.static(path.join(__dirname, 'upload')))

const multer = require('multer')
const path = require ('path')

const diskStorage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,path.join(__dirname, '../upload'))
    },
    filename: function (req,file, cb){
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        )
    }
})

const upload = multer({storage:diskStorage}).single('photo')

module.exports= upload