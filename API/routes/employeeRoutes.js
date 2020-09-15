/* Este archivo contiene las rutas 
 * necesarias para gestionar los pacientes,
 * aquí se hace la conexión con los archivos 
 * requeridos para cada tarea */

 // Llamamos express para usar la conexión con Mongoose
const express = require('express');

// Llamamos el controlador con todas las funciones necesarias
const employeeController = require('../controllers/employeeController');

const api = express.Router();

api.post('/employeeCreate', employeeController.create);
api.put('/:id', employeeController.update);
api.get('/employeeListAll/', employeeController.listAll);
api.get('/:documento', employeeController.listOne);
api.delete('/:documento', employeeController.softDelete);


module.exports = api
