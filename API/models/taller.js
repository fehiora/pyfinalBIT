const mongose = require('mongoose');
const Schema = mongose.Schema;

var TallerSchema = new Schema({
    nombre: String,
    fecha : String,
    duracion: Number,
    lugar: String,
    temas: String,
    num_participantes: Number,
    nombre_participante :String,
    documento_participante : Number,
    observaciones: String,
    participante_nuevo: Boolean
});

module.exports = mongose.model('Taller', TallerSchema);