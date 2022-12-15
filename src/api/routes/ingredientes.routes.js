const express = require('express');

const ingredientsRouter = express.Router();

const {getAllIngredients, getIngredients, postIngredients, putIngredients, deleteIngredients} = require('../controllers/ingredients.controllers')

const {isAuth} = require('../../middlewares/auth'); //Para securizar rutas.

//--------------------------------------Routers Cocktails

ingredientsRouter.get('/', getAllIngredients);
ingredientsRouter.get('/:id', getIngredients)
ingredientsRouter.post('/', postIngredients); //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.
ingredientsRouter.put('/:id', putIngredients); //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.
ingredientsRouter.delete('/:id', deleteIngredients); //Securizadas las rutas que no quiero que cojan los usuarios sin loguearse.

//Exportación de la ruta

module.exports = ingredientsRouter;