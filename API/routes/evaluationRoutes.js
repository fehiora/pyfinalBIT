const express = require('express');

const evaluationController = require('../controllers/evaluationController');

const api = express.Router();

api.post('/evaluationCreate', evaluationController.create);
api.put('/:id', evaluationController.modificate);
// api.get('/:id/', evaluationController.listAll);
api.get('/:id', evaluationController.listOne);

module.exports = api
