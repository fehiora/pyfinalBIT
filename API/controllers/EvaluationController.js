const Evaluation = require('../models/evaluation');


//Primera Función para crear las evaluaciones
function create (req, res) {
    var evaluation = new Evaluation();
    var params = req.body;
    evaluation.id_psicologo = params.id_psicologo;
    evaluation.id_trabajador = params.id_trabajador;
    evaluation.anio_evaluation = params.anio_evaluation;
    evaluation.nivel_riesgo = params.nivel_riesgo;
    evaluation.nivel_estres = params.nivel_estres;
    evaluation.rpriorizado1 = params.rpriorizado1;
    evaluation.rpriorizado2 = params.rpriorizado2;
    evaluation.rpriorizado3 = params.rpriorizado3;
    evaluation.rep_personalidad = params.rep_personalidad;
    evaluation.rep_afrontamiento = params.rep_afrontamiento;

    evaluation.save ((error, evaluationcreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!evaluationcreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear evaluación"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Evaluación creada correctamente",
                    evaluationData: evaluationcreated
                })
            }
        }
    })
}

//Segunda función para modificar la evaluación

function modificate (req, res) {
    var dataevaluation = req.body;
    var id = req.params.id;
    Evaluation.findByIdAndUpdate(id, dataevaluation, (error, evaluationModificated) => {
        if (error) {
            res.send({
                message: "Error de conexión con el servidor al modificar evaluación",
                statusCode: 500
            })
        } else {
            if (!evaluationModificated) {
                res.send({
                    message: "No se modificó la evaluación",
                    statusCode: 400
                })
            } else {
                res.send({
                    message: "Evaluación modificada",
                    statusCode: 200,
                    dataevaluation: evaluationModificated
                })
            }
        }
    })
}

//tercera función para listar las evaluaciones que se han hecho a un trabajador

// function listAll (req, res) {

//     var idNumber = req.params.id_trabajador
//     Evaluation.find ({id: idNumber}, (error,evaluationListed) => {
//         if (error) {
//             res.send ({
//                 message: "Error de conexion al listar evaluaciones",
//                 statusCode: 500
//             })
//         }else{
//             if(!evaluationListed) {
//                 res.send({
//                     message: "No hay evaluaciones guardadas",
//                     statusCode: 400
//                 })
//             }else {
//                 res.send ({
//                     message: "Esta es la lista de evaluaciones del trabajador",
//                     statusCode: 200,
//                     data: evaluationListed
//                 })
//             }
//         }
//     })
// }

//Cuarta funcion para ver el detalle de una sola evaluación

function listOne (req, res) {
    var idNumberPropio = req.params._id;
    Evaluation.findOne ({
        documento: idNumberPropio
    }, (error, evaluationDetalled) => {
        if(error) {
            res.send({
                message: "Error de conexión al listar una evaluación",
                statusCode: 500
            })
        }else{
            if(!evaluationDetalled) {
                res.send({
                    message: "La evaluación no existe",
                    statusCode: 400
                })
            }else {
                res.send ({
                    message: "Detalle de la evaluación seleccionada",
                    data: evaluationDetalled
                })
            }
        }
    })
}



module.exports = {
    create,
    modificate,
    // listAll,
    listOne,
}
