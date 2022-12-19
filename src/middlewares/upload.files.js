const multer = require("multer");  //Configuración para la subida de archivos a cloudinary
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary, 
    params : {
        folder : "cocktails",
        allowedFormats : ["jpg", "png", "jpeg", "gif", "webp"]
    }
})

const upload = multer({storage})

module.exports = upload;