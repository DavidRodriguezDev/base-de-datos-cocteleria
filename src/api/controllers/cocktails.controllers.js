const Cocktail = require('../models/cocktails.models');



const getAllCocktails = async (request, response) => {
    try {
        
        const allCocktails = await Cocktail.find().populate("ingredients");
        return response.status(200).json(allCocktails);

    } catch (error) {
        response.status(500).json(error)
    }
}

const getCocktail = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allCocktails = await Cocktail.findById(id).populate("ingredients");
        return response.status(200).json(allCocktails);

    } catch (error) {
        response.status(500).json(error)
    }
}

const postNewCocktail = async (request, response) => {
    try {
        
        const {name, glass, ice, method, decoration, ingredients, photo} = request.body;
        const newCocktail = new Cocktail({name, glass, ice, method, decoration, ingredients, photo});

        if(request.file) {
            newCocktail.photo = request.file.path;
        }

        const createdCocktail = await newCocktail.save();
        return response.status(200).json(createdCocktail);

    } catch (error) {
        response.status(500).json(error)
    }
}

const putCocktail = async (request, response) => {
    try {
        
        const{id} = request.params
        const putCocktail = new Cocktail(request.body);
        putCocktail._id = id;

        if(request.file) {
        putCocktail.photo = request.file.path;
        }
                    
        const cocktailDb = await Cocktail.findByIdAndUpdate(id, putCocktail);
        if(!cocktailDb){
            return response.status(404).json({"message" : "Cocktail not found"})
        }
        return response.status(200).json(putCocktail);
    } catch (error) {
        response.status(500).json(error)
    }
}

const deleteCocktail = async (request, response) => {
    try {
        const {id} = request.params;
        const cocktailDb = await Cocktail.findByIdAndDelete(id);

        if(!cocktailDb){
            return response.status(404).json({"message" : "Cocktail not found"})
        }
        return response.status(200).json(cocktailDb);
        
    } catch (error) {
        response.status(500).json(error)
    }
}

module.exports = {getAllCocktails, getCocktail, postNewCocktail, putCocktail, deleteCocktail};