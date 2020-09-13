/* Este archivo contiene las rutas 
 * necesarias para gestionar usuarios,
 * aquí se hace la conexión con los archivos 
 * requeridos para cada tarea */

// Llamamos express para usar la conexión con Mongoose
const express = require('express');

// Llamamos el controlador con todas las funciones necesarias
const userController = require('../controllers/UserController');

// Definimos las rutas particulares
// a las acciones sobre el modelo de 
// usuarios que va a tener esta parte
// del API, mediante el uso de esta
// constante
const api = express.Router();

// Definimos el ENDPOINT para crear un
// nuevo usuario, este metodo se gestionará
// mediante el verbo POST 
api.post('/', userController.create);

// Definimos el ENDPOINT para editar un
// usuario, el cual buscaremos en la BD usando
// el parámtro 'id' para saber cual modificar. 
// Este metodo se gestionará mediante el verbo PUT 
api.put('/:id', userController.update);

// Definimos el ENDPOINT para eliminar un
// usuario, el cual buscaremos en la BD usando
// el parámtro 'id' para saber cual eliminar. 
// Este metodo se gestionará mediante el verbo DELETE 
api.delete('/:id', userController.remove);

// Este ENDPOINT se usa para obtener una lista
// de todos los usuarios almacenados en la BD,
// es por eso que no requiere de parámetros.
// Este metodo se gestionará mediante el verbo GET 
api.get('/allUser', userController.listAll);

// Este ENDPOINT se usa para obtener todos los datos
// de un usuario, que buscaremos en la BD usando
// el parámetro 'documento'.
// Este metodo se gestionará mediante el verbo GET 
api.get('/:documento', userController.listOne);

// Este ENDPOINT se usa para gestionar el acceso
// de un usuario a la aplicación (o 'login' en ingles)
// Este metodo se gestionará mediante el verbo POST,
// ya que la petición contiene datos sensibles 
api.post('/login', userController.login);

// Este ENDPOINT se usa para gestionar el acceso
// de un usuario a la aplicación (o 'login' en ingles)
// verificando si este usuario tiene el rol de administrador.
// Este metodo se gestionará mediante el verbo POST,
// ya que la petición contiene datos sensibles 
api.post('/adminlogin', userController.adminlogin);

// Este ENDPOINT se usa para obtener todos los datos
// de un usuario, que buscaremos en la BD usando
// el parámetro 'id'.
// Este metodo se gestionará mediante el verbo GET
// api.get('/getUser/:id', userController.getUser);


// En esta linea exportamos el objeto 'app'
// para ser importado como modulo en donde se requiera
// dentro de nuestra aplicación, este objeto contiene
// las rutas pertinentes al manejo de usuarios
module.exports = api;