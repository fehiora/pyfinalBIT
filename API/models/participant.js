const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
    id_taller: String,
    nombre: String,
    apellido: String,
    documento: Number
});

module.exports = mongoose.model('Participant', ParticipantSchema);