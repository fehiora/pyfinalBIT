/* Este archivo contiene las rutas 
 * necesarias para gestionar los pacientes,
 * aquí se hace la conexión con los archivos 
 * requeridos para cada tarea */

 // Llamamos express para usar la conexión con Mongoose
const express = require('express');

// Llamamos el controlador con todas las funciones necesarias
const employeeController = require('../controllers/employeeController');

const api = express.Router();
const employeController = require('../controllers/employeeController')

api.post('/employeeCreate', employeController.create);
api.put('/:id', employeController.update);
api.get('/employeeListAll/', employeController.listAll);
api.get('/:documento', employeController.listOne);
api.delete('/:documento', employeController.softDelete);


module.exports = api
