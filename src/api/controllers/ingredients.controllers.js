const Ingredients = require('../models/ingredients.models');

const getAllIngredients = async (request, response) => {
    try {
        
        const allIngredients = await Ingredients.find();
        return response.status(200).json(allIngredients);

    } catch (error) {
        
        response.status(500).json(error)

    }
}

const getIngredients = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allIngredients = await Ingredients.findById(id);
        return response.status(200).json(allIngredients);

    } catch {
        
        response.status(500).json(error)

    }
}

const postIngredients = async (request, response) => {
    try {
        
        const {mainIngredient, secondIngredient, thirdIngredient, fourthIngredient, fifthIngredient, sixthIngredient} = request.body;
        const newIngredients = new Ingredients({mainIngredient, secondIngredient, thirdIngredient, fourthIngredient, fifthIngredient, sixthIngredient});
        const createdIngredients = await newIngredients.save();
        return response.status(200).json(createdIngredients);

    } catch (error) {
        
        response.status(500).json(error)

    }
}

const putIngredients = async (request, response) => {
    try {
        
        const{id} = request.params
        const putIngredients = new Ingredients(request.body);
        putIngredients._id = id;

        const ingredientDb = await Ingredients.findByIdAndUpdate(id, putIngredients);
        if(!ingredientDb){
            return response.status(404).json({"message" : "Ingredients not found"})
        }
        return response.status(200).json(putIngredients);
    } catch (error) {
        response.status(500).json(error)
    }
}

const deleteIngredients = async (request, response) => {
    try {
        const {id} = request.params;
        const ingredientDb = await Ingredients.findByIdAndDelete(id);

        if(!ingredientDb){
            return response.status(404).json({"message" : "Ingredients not found"})
        }
        return response.status(200).json(ingredientDb);
        
    } catch (error) {
        response.status(500).json(error)
    }
}

module.exports = {getAllIngredients, getIngredients, postIngredients, putIngredients, deleteIngredients}