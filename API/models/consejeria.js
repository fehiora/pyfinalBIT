const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ConsejeriaSchema = new Schema ({
    documento_trabajador: Number,
    lugar: String,
    fecha: String,
    duracion: Number,
    tipo: String,
    hallazgos : String,
    recomendaciones : String,
    seguimiento: Boolean,
    rem_salud: Boolean,
    cerrar_consejeria : Boolean
});

module.exports = mongoose.model('Consejeria', ConsejeriaSchema);