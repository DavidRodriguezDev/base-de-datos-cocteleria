const express = require('express');
const {connect} = require('./src/utils/database'); //Conexión  con la BBDD
const dotenv = require('dotenv');
const cors = require('cors');

//Routers  
const routerCocktails = require('./src/api/routes/cocktail.routes');
const routerIngredients = require('./src/api/routes/ingredientes.routes')
const userRouter = require('./src/api/routes/users.routes');
const { isAuth } = require('./src/middlewares/auth');

const PORT = process.env.PORT || 9000;

dotenv.config();
const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH');
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept');
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use(cors({
    origin: ['http://localhost:3040'],
    credentials: 'false'
}))

app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({extended: false})); 

app.use('/cocktails', routerCocktails);
app.use('/ingredients', routerIngredients);
app.use('/users', userRouter);  //Esta no se securiza porque para acceder a loguearte no estás autenticado.

app.listen(PORT, () => console.log(`listening on port : http://localhost:${PORT}`));