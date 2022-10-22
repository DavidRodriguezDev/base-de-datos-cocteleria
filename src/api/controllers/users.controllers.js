const User = require('../models/users.models');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validatiors/validation')
const {generateSign, verifyJwt} = require('../../jwt/jwt')

const register = async (request, response, next) => {       //Función para el registro.
    try {
        
        const newUser = new User(request.body);

        if(!validationEmail(request.body.email)) {
            console.log({code : 403, message : "Invalid email"});
            response.status(403).json({message : "Invalid email"});
            return next();
        }
    
        if(!validationPassword(request.body.password)) {
            console.log({code : 403, message : "Invalid password"});
            response.status(403).json({message : "Invalid password"});
            return next();
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return response.status(201).json(createdUser);

    } catch (error) {
        
        return response.status(500).json(error);

    }
}


const login = async (request, response, next) => {       //Función para el login.
    try {
        const userInfo = await User.findOne({email : request.body.email});
        console.log(userInfo);
        if(bcrypt.compare(request.body.password, userInfo.password)) {

            const token = generateSign(userInfo._id, userInfo.email); //Generamos un token pasando los parámetros ._id, email
            console.log(token)
            return response.status(200).json(token)
            
            
        } else {
          
            return response.status(400).json({message : "Invalid password"})

        }

    } catch (error) {
        
    }
}

const logout = (request, response, next) => {
    try {
        
        response.status(200).json({token : null}) //Estamos devolviendo el valor del token a null para que nos salga de la sesión.

    } catch (error) {
        
    }
}

module.exports = {register, login, logout};

/*



*/