const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    name : { type : String, required : true },
    email : { type : String, required : true},
    password : { type : String, required : true}
},{
    timestamps : true
})

UsersSchema.pre('save', function(next) {         //Antes de almacenar el usuario vamos a hacer algo previo que es transformar nuestra password en contraseña encriptada.

    this.password = bcrypt.hashSync(this.password, 10); //Encriptamos -this.password- 10 veces
    next();
})

const User = mongoose.model('User', UsersSchema);

module.exports = User;