//Siempre que se quiera usar una heramienta de Node js se debe requerir

const mongoose = require('mongoose'); //Requiriendo mongoose para conectar la base de datos.
const app = require('./app.js') //Requiriendo app para poder trabajar con express
const port = 3000; //Se especifica el puerto por el cual se va a conectar la api

mongoose.connect('mongodb://localhost:27017/psicologos', {useNewUrlParser: true, useUnifiedTopology: true}, (error, res) => {
    if(error){
        console.error('Error de conexión', error);
    }
    else{
        console.log('Conexión exitosa!');
        app.listen(port, () => {
            console.log('Estamos escuchando el puerto', port)
        })
    }
}); //Se puede nombrar la bd sin haberla creado

