const express = require('express');

const userRouter = express.Router();

const {register, login, logout} = require('../controllers/users.controllers');

const {isAuth} = require('../../middlewares/auth');

userRouter.post('/register', register); //Ruta para registro de usuarios.
userRouter.post('/login', login); //Ruta para login de usuarios.
userRouter.post('/logout',[isAuth] ,logout); //Ruta para logout de usuarios. Solo acepta para los usuarios que tengan token/ estén logueados.

module.exports = userRouter;