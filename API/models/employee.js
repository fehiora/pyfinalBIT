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
    fecha_nacimiento: Date,
    fecha_ingreso_cia: Date,
    cargo_actual: String,
    fecha_ingreso_cargo: Date,
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