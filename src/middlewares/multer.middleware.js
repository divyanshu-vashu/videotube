import multer from "multer";

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(nnull,"./public/temp")
    },
    filename:function(req,file,cb){
        // const uniqueSuffix = Date.now()+'-'+Math.round
        // (Math.random()*1E9) // use for unique filename
        // cb(null,file.filename+'-'+uniqueSuffix
        cb(null,file.originalname)
    }
})


export const upload= multer({storage,})
