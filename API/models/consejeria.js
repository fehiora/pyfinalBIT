const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ConsejeriaSchema = new Schema ({
    documento_trabajador: Number,
    lugar: String,
    fecha: String,
    duración: Number,
    tipo: String,
    hallazgos : String,
    recomendaciones : String,
    seguimiento: Boolean,
    rem_salud: Boolean
});

module.exports = mongoose.model('Consejeria', ConsejeriaSchema);