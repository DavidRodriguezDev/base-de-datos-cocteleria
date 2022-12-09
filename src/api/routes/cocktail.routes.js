const express = require('express');

const router = express.Router();

const  {getAllCocktails, getCocktail, postNewCocktail, putCocktail, deleteCocktail} = require('../controllers/cocktails.controllers');

const {isAuth} = require('../../middlewares/auth'); //Para securizar rutas.

//--------------------------------------Routers

router.get('/', getAllCocktails)

router.get('/:id', getCocktail)

router.post('/', [isAuth] ,postNewCocktail) //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.


router.put('/:id',  [isAuth] ,putCocktail) //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.

router.delete('/:id',  [isAuth] ,deleteCocktail) //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.

//Exportación de la ruta

module.exports = router;
