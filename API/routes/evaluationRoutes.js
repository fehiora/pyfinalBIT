const express = require('express');

const evaluationController = require('../controllers/evaluationController');

const api = express.Router();

api.post('/evaluationCreate', evaluationController.create);
api.put('/:id', evaluationController.modificate);
api.get('/list/:id_trabajador', evaluationController.listAll);
api.get('/detail/:evaluation_id', evaluationController.listOne);

module.exports = api
