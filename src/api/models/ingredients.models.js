const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema(
    {
        mainIngredient : {type: String, required : true},
        restIngredients : [{type: String, required : true}],
        measures : [{type: String, required : true}]
    },
    {
        timestamps : true
    }
)

const Ingredients = mongoose.model('ingredients', ingredientsSchema);

module.exports = Ingredients;


