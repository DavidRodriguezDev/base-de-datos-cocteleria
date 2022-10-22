const jwt = require('jsonwebtoken');

const isAuth = (request, response, next) => {
    const authorization = request.headers.authorization;

    if(!authorization) {
        return response.status(401).json({message : "Unauthorizred"});
    }

    const token = authorization.split(" ")[1]; //Cogemos el segundo elemento del array que es el token sin la palabra Bearer

    if(!token) {
        response.status(401).json({message : "No token provided"})
    }

    try {
        
        var tokenVerified = jwt.verify(token, process.env.JWT_KEY);
        request._user = tokenVerified;

    } catch (error) {
        response.status(500).json(error)
    }

    next();
}

module.exports = {isAuth}