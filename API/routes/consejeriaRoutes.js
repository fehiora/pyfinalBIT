const express = require('express');

const consejeriaController = require('../controllers/consejeriaController');

const api = express.Router();

api.post('/consejeriaCreate', consejeriaController.create);
api.put('/:id', consejeriaController.modificate);
api.get('/list/:documento_trabajador', consejeriaController.listAll);
api.get('/detail/:consejeria_id', consejeriaController.listOne);

module.exports = api