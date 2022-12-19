const cloudinary = require("cloudinary").v2;

const deleteFile = (imgUrl) => {
    const imgSplited = imgUrl.split("/");
    const nameSplited = imgSplited[imgSplited.length -1].split("."); //Hacemos split del último elemento del array para obtener el nombre
    const folder = imgSplited[imgSplited.length -2]; //Obtenemos el penúltimo elemento de la url que es el nombre de la carpeta
    const imgToDelete = `${folder}/${nameSplited[0]}`; //Obtenemos el filename que da cloudinary a nuestra imagen
    cloudinary.uploader.destroy(imgToDelete, () => console.log("Image delete in cloudinary")); //La borramos de cludinary
}

module.exports = {deleteFile};