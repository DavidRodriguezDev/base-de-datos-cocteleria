const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
    {
        mainIngredient : {type : String, required : true},
        secondIngredient : {type : String, required : true},
        thirdIngredient : {type : String},
        fourthIngredient : {type : String},
        fifthIngredient : {type : String},
        sixthIngredient : {type : String}
    }, {
        timestamps : true
    }
)

const Ingredients = mongoose.model('ingredients', ingredientsSchema);

module.exports = Ingredients;


