/* 
* Este archivo define el modelo base para el manejo
* de los pacientes
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    nombre: String,
    apellido: String,
    genero: String,
    tipo_doc: String,
    documento: Number,
    edad: Number,
    fecha_ingreso_cia: String,
    cargo_actual: String,
    fecha_ingreso_cargo: String,
    celular: Number,
    email: String,
    convivencia: String,
    per_convivencia: String,
    per_conv_parentesco: String,
    per_apoyo: String,
    per_apoy_parentesco: String,
    estado: Boolean,
});

module.exports = mongoose.model('Employee', EmployeeSchema);