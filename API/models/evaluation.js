/* 
* Este archivo define el modelo base para el manejo
* de los pacientes
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EvaluationSchema = new Schema({
    id_psicologo: String,
    id_trabajador: String,
    anio: String,
    nivel_riesgo: String,
    nivel_estres: String,
    rpriorizado1: String,
    rpriorizado2: String,
    rpriorizado3: String,
    rep_personalidad: String,
    rep_afrontamiento: String,
});

module.exports = mongoose.model('User', EvaluationSchema);