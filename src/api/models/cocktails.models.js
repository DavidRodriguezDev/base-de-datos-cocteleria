const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cocktailSchema = new Schema(
    {
        name : {type : String, required : true},
        glass : {type : String, required : true},
        ice : {type : String, required : true},
        method : {type : String, required : true},
        decoration : {type : String, required : true},
        photo : {type : String, required : true},
        ingredients : [{type: Schema.Types.ObjectId, ref: "ingredients"}]
    }, {
        timestamps : true
    }
)

const Cocktail = mongoose.model('cocktail', cocktailSchema);

module.exports = Cocktail;


