//Este archivo tiene toda la lógica del proyecto

//Bloque de código para requerir de cosas de los otros archivos
const express = require('express'); //se está requiriendo express
const routes = require('./routes/userRoutes');
const bodyParser = require('body-parser'); //el bodyParser convierte en archivos jason lo que viene del body. Antes de crearlo es necesario instalarlo con npm instal. body-parse --save


const app = express(); //esta constante se crea para convertir express en un objeto para poder acceder a todos sus métodos
app.use(bodyParser.json()); //se usa para analizar los datos que vienen de la url considerandolo como un jason

app.use('/apipsicoguardian', routes);

module.exports = app;

