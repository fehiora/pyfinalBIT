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
    nivel_riesgo: String,
    nivel_estres: String,
    rpriorizado1: String,
    rpriorizado2: String,
    rpriorizado3: String,
    rep_personalidad: String,
    rep_afrontamiento: String,
    convivencia: String,
    per_convivencia: String,
    per_conv_parentesco: String,
    per_apoyo: String,
    per_apoy_parentesco: String,
});

module.exports = mongoose.model('User', EmployeeSchema);