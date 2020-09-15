// Este archivo tiene toda la lógica del proyecto

/* Inicio del Bloque de código para requerir de cosas de los otros archivos */
/* ------------------------------------------------------------------------ */

// Se está requiriendo express
const express = require('express');
// Variables con las rutas para cada unidad de negocio
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const evaluationRoutes = require ('./routes/evaluationRoutes');
// const patientRoutes = require('./routes/patientRoutes');

// El bodyParser convierte en archivos json 
// lo que viene del body. Antes de crearlo es 
// necesario instalarlo con 'npm install body-parse --save'
const bodyParser = require('body-parser'); 
// El modulo 'cors' se usa para gestionar 
// permisos de acceso a la API desde los clientes. 
// 'cors' se debe instalar con 'npm install cors'
const cors = require('cors');

/* ---------------------- */
/* Fin del Bloque require */


// Esta constante contiene una instancia del objeto express 
// y la usaremos para poder acceder a todos sus métodos
const app = express();

// Esta linea nos permite analizar los datos que vienen 
// en la petición (como la url y los datos) 
// y los conviente a un objeto JSON
app.use(bodyParser.json()); 
app.use(cors());

// En esta linea definimos la raíz de nuestro
// servicio RESTful API, toda petición debe comenzar
// con este prefijo de ruta, el segundo argumento (routes)
// se encargará de direccionar las peticiones a la
// ruta final adecuada para su proceso 
app.use('/apipsicoguardian/user', userRoutes);
app.use('/apipsicoguardian/employee', employeeRoutes);
app.use('/apipsicoguardian/evaluation', evaluationRoutes);
// app.use('/psicoguardian/api/user', userRoutes);
// app.use('/apipsicoguardian/patient', patientRoutes);

// En esta linea exportamos el objeto 'app'
// para ser importado como modulo en donde se requiera
// dentro de nuestra aplicación
module.exports = app;

