const Evaluation = require('../models/evaluation');

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
