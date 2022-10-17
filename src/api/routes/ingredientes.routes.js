const express = require('express');

const ingredientsRouter = express.Router();

const {getAllIngredients, getIngredients, postIngredients, putIngredients, deleteIngredients} = require('../controllers/ingredients.controllers')

//--------------------------------------Routers Cocktails

ingredientsRouter.get('/', getAllIngredients);
ingredientsRouter.get('/:id', getIngredients)
ingredientsRouter.post('/', postIngredients);
ingredientsRouter.put('/:id', putIngredients);
ingredientsRouter.delete('/:id', deleteIngredients);

//Exportación de la ruta

module.exports = ingredientsRouter;