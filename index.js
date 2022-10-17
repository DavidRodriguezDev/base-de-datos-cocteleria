const express = require('express');
const {connect} = require('./src/utils/database'); //Conexión  con la BBDD
const dotenv = require('dotenv');

//Routers por destilado
const routerCocktails = require('./src/api/routes/cocktail.routes');
const routerIngredients = require('./src/api/routes/ingredientes.routes')


const PORT = process.env.PORT || 9000;

dotenv.config();
const app = express();
connect();

app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({extended: false})); 

app.use('/cocktails', routerCocktails);
app.use('/ingredients', routerIngredients);

app.listen(PORT, () => console.log(`listening on port : http://localhost:${PORT}`));