
// Llamamos el modelo para ejecutar las operaciones
// necesarios en cada requerimiento
const Evaluation = require('../models/evaluation');

// Primera función. Esta función responde a la 
// petición de creación del trabajador, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function create(req, res) {
    // Variable con una instancia del modelo user
    // que usaremos para registrar un nuevo paciente
    // en la BD de acuerdo al modelo definido en evaluation.js
    var evaluation = new Evaluation(); 

    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var params = req.body;

    // Asignando los datos que vienen incluidos
    // en el objeto 'params' a los atributos 
    // correspondiente en el objeto 'evaluation'
    evaluation.id_psicologo = params.id_psicologo;
    evaluation.id_trabajador = params.id_trabajador;
    evaluation.anio = params.anio;
    evaluation.nivel_riesgo = params.nivel_riesgo;
    evaluation.nivel_estres = params.nivel_estres;
    evaluation.rpriorizado1 = params.rpriorizado1;
    evaluation.rpriorizado2 = params.rpriorizado2;
    evaluation.rpriorizado3 = params.rpriorizado3;
    evaluation.rep_personalidad = params.rep_personalidad;
    evaluation.rep_afrontamiento = params.rep_afrontamiento;
    
    // Función para guardar el nuevo registro en el modelo
    evaluation.save((error, evaluationCreated) =>{
        // Ingresa sí hay un error de servidor
        if(error){
            console.error(error);
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        // Ingresa sí no hay error de servidor
        }else{
            // Ingresa sí la evaluación no fue creado
            if(!evaluationCreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear la evaluación"
                })
            // Ingresa sí la evaluación fue creada con éxito
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Evaluación creada correctamente",
                    evaluation: evaluationCreated
                })
            }
        }
    })
}

// Segunda función. Esta función responde a la 
// petición de modificación de evaluación, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function update(req, res){
    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var dataEvaluation = req.body;

    // Variable donde asignaremos el 'id' especifico
    // de la petición incluido en el cuerpo (body) 
    // de la petición (req)
    var id = req.params.id;

    // Función para buscar una evaluación y actualizar 
    // los datos del registro en el modelo
    User.findByIdAndUpdate(id, dataEvaluation, (error, evaluationUpdated)=> {
        if(error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            })
        }else{
            if(!evaluationUpdated){
                res.send({
                    message: "No se modificó la evaluación",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Trabajador evaluación modificada",
                    statusCode: 200,
                    interventionUser: evaluationUpdated
                })
            }
        }
    })
}

// Tercera función. Esta función responde a la 
// petición de eliminar una evaluación. Esta función
// no requiere traer información de la BD, solo 
// requiere buscar por el 'id' que se incluya en 
// la petición.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function remove(req, res){
    // Variable donde asignaremos el 'id' especifico
    // de la petición incluido en el cuerpo (body) 
    // de la petición (req)
    var id = req.params.id;

    // función para buscar por el 'id' un usuario
    // y borrarlo de la BD
    User.findByIdAndDelete(id, (error, interventionDeleted) => {
        if (error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            }) 
        }else{
            if(!interventionDeleted){
                res.send({
                    message: "Error al eliminar la intervención",
                    statusCode: 400
                })
            }else{
                res.send({
                    message:"Intervención eliminada correctamente",
                    statusCode: 200
                })
            }
        }
    })
}


// Cuarta función. Esta función responde a la 
// petición de consultar un trabajador por un 'documento'
// especificado en el cuerpo de la petición. Trae
// toda la información del usuario correspondiente al 'documento'.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function listOne(req,res){
    // Variable donde asignaremos el 'documento' especifico,
    // incluido en el cuerpo (body) de la petición (req)
    var documentNumber = req.params.documento;

    User.findOne({documento: documentNumber}, (error,employeeDetalled)=>{
        if(error){
            res.send({
                message: "Error de conexión",
                statusCode:500
            })
        }else{
            if(!employeeDetalled){
                res.send({
                    message: "El trabajador no existe",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Esta es la información del trabajador:",
                    data: employeeDetalled
                })
            }    
        }
    })
}


// En esta linea exportamos un objeto anónimo
// para ser importado como modulo en donde se requiera
// dentro de nuestra aplicación
module.exports = {
   create,
   update,
   remove,
   listOne,
}