//Este es el archivo de las rutas para que se pueda hacer la conexión entre los archivos

const express = require('express'); //se vuelver a llamar express para poder trabajar con él
const userController = require('../controllers/UserController');
const UserController = require('../controllers/UserController');
const api = express.Router(); //para enfocarse en las rutas que se van a utilizar


api.post('/', userController.create);
api.put('/:id', userController.update); //incluye id porque es el id del usuario que se va a modificar
api.delete('/:id',userController.remove); //incluye id porque es el id del usuario que se va a eliminar
api.get('/allUser', userController.listAll); // no requiere parametros, devuelve una lista completa
api.get('/:documento', userController.listOne);
api.post('/login',userController.login);//se usa el método post porque es información sensible y no debe mostrarse por la URL. No se unsa dos puntos porque login no es un parámetro.
api.get('/getUser/:id', UserController.getUser);

module.exports = api; //se exportan las rutas para poder utilizarlas en el archivo app.js
