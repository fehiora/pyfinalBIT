const Consejeria = require('../models/consejeria');


//Primera Función para crear consejería
function create(req, res) {
    var consejeriaVar = new Consejeria();
    var params = req.body;
    consejeriaVar.documento_trabajador = params.documento_trabajador;
    consejeriaVar.lugar = params.lugar;
    consejeriaVar.fecha = params.fecha;
    consejeriaVar.duracion = params.duracion;
    consejeriaVar.tipo = params.tipo;
    consejeriaVar.hallazgos = params.hallazgos;
    consejeriaVar.recomendaciones = params.recomendaciones;
    consejeriaVar.seguimiento = params.seguimiento;
    consejeriaVar.rem_salud = params.rem_salud;
    consejeriaVar.cerrar_consejeria = params.cerrar_consejeria;


    consejeriaVar.save((error, consejeriaVarcreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!consejeriaVarcreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear consejeria"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Consejeria creada correctamente",
                    consejeriaVarData: consejeriaVarcreated
                })
            }
        }
    })
}

//Segunda función para modificar la consejeria

function modificate (req, res){
    var dataconsejeria = req.body;
    var consejeria_id = req.params.id

    Consejeria.findById(consejeria_id, (error, consejeriaEncontrada) =>{
        if (error){
            res.send({
                message: "Error de conexión al modificar consejeria",
                statusCode: 500
            })
        }else{
            if(!consejeriaEncontrada) {
                res.send({
                    message : "No se encontró la consejería",
                    statusCode: 400
                })
            }else{
                if(consejeriaEncontrada.cerrar_consejeria === true){
                    res.send({
                        message: "La consejería está cerrada, no se puede modificar",
                        statusCode: 403
                    })
                }else{
                    Consejeria.findByIdAndUpdate(consejeria_id, dataconsejeria, (error, consejeriaModificada) =>{
                        if(consejeriaModificada) {
                            res.send({
                                message: "Consejeria modificada",
                                statusCode: 200,
                                dataconsejeria : consejeriaModificada
                            })
                        }
                    })
                }
            }
        }
    })
}

//tercera función para listar las consejerias que se han hecho a un trabajador

    function listAll (req, res) {

        var documentNumberTrabajador = req.params.documento_trabajador

        Consejeria.find ({documento_trabajador: documentNumberTrabajador}, (error,consejeriaListed) => {
            if (error) {
                res.send ({
                    message: "Error de conexion al listar consejerias",
                    statusCode: 500
                })
            }else{
                if(!consejeriaListed) {
                    res.send({
                        message: "No hay consejerias guardadas",
                        statusCode: 400
                    })
                }else {
                    res.send ({
                        message: "Esta es la lista de evaluaciones del trabajador",
                        statusCode: 200,
                        data: consejeriaListed
                    })
                }
            }
        })
    }

    //Cuarta funcion para ver el detalle de una sola consejeria

    function listOne (req, res) {
        var idNumberPropio = req.params.consejeria_id;
        Consejeria.findById (idNumberPropio, (error, consejeriaDetalled) => {
            if(error) {
                res.send({
                    message: "Error de conexión al listar una consejeria",
                    statusCode: 500
                })
            }else{
                if(!consejeriaDetalled) {
                    res.send({
                        message: "La consejeria no existe",
                        statusCode: 400
                    })
                }else {
                    res.send ({
                        message: "Detalle de la consejeria seleccionada",
                        data: consejeriaDetalled
                    })
                }
            }
        })
    }



    module.exports = {
        create,
        modificate,
        listAll,
        listOne,
    }