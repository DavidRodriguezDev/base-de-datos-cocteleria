const express = require('express');

const router = express.Router();

const  {getAllCocktails, getCocktail, postNewCocktail, putCocktail, deleteCocktail} = require('../controllers/cocktails.controllers');


//--------------------------------------Routers

router.get('/', getAllCocktails)

router.get('/:id', getCocktail)

router.post('/', postNewCocktail)


router.put('/:id', putCocktail)

router.delete('/:id', deleteCocktail)

//Exportación de la ruta

module.exports = router;
