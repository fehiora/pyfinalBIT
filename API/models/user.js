const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre: String,
    apellido: String,
    documento: Number,
    tarjetaProfesional: Number,
    licenciaSo: String,
    celular: Number,
    email: String,
    contrasenia: String
});

module.exports = mongoose.model('User', UserSchema);