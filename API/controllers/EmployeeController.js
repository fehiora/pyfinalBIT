
// Llamamos el modelo para ejecutar las operaciones
// necesarios en cada requerimiento
const Employee = require('../models/employee');

// Primera función. Esta función responde a la 
// petición de creación del trabajador, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function create(req, res) {
    // Variable con una instancia del modelo user
    // que usaremos para registrar un nuevo paciente
    // en la BD de acuerdo al modelo definido en employee.js
    var employee = new Employee(); 

    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var params = req.body;

    // Asignando los datos que vienen incluidos
    // en el objeto 'params' a los atributos 
    // correspondiente en el objeto 'employee'
    employee.nombre = params.nombre;
    employee.apellido = params.apellido;
    employee.genero = params.genero;
    employee.tipo_doc = params.tipo_doc
    employee.documento = params.documento;
    employee.edad = params.edad;
    employee.fecha_ingreso_cia = params.fecha_ingreso_cia;
    employee.cargo_actual = params.cargo_actual;
    employee.fecha_ingreso_cargo = params.fecha_ingreso_cargo;
    employee.celular = params.celular;
    employee.email = params.email;
    employee.nivel_riesgo = params.nivel_riesgo;
    employee.nivel_estres = params.nivel_estres;
    employee.rpriorizado1 = params.rpriorizado1;
    employee.rpriorizado2 = params.rpriorizado2;
    employee.rpriorizado3 = params.rpriorizado3;
    employee.rep_personalidad = params.rep_personalidad;
    employee.rep_afrontamiento = params.rep_afrontamiento;
    employee.convivencia = params.convivencia;
    employee.convivencia = params.per_convivencia;
    employee.per_conv_parentesco = params.per_conv_parentesco;
    employee.per_apoyo = params.per_apoyo;
    employee.per_apoy_parentesco = params.per_apoy_parentesco;
 

    // Función para guardar el nuevo registro en el modelo
    employee.save((error, employeecreated) =>{
        // Ingresa sí hay un error de servidor
        if(error){
            console.error(error);
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        // Ingresa sí no hay error de servidor
        }else{
            // Ingresa sí el trabajador no fue creado
            if(!employeecreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear al trabajador"
                })
            // Ingresa sí el trabajador fue creado con éxito
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Empleado creado correctamente",
                    employeeData: employeecreated
                })
            }
        }
    })
}

// Segunda función. Esta función responde a la 
// petición de modificación de trabajador, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function update(req, res){
    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var dataUser = req.body;

    // Variable donde asignaremos el 'id' especifico
    // de la petición incluido en el cuerpo (body) 
    // de la petición (req)
    var id = req.params.id;

    // Función para buscar un trabajador y actualizar 
    // los datos del registro en el modelo
    User.findByIdAndUpdate(id, dataemployee, (error, employeeUpdated)=> {
        if(error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            })
        }else{
            if(!employeeUpdated){
                res.send({
                    message: "No se modificó el trabajador",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Trabajador modificado",
                    statusCode: 200,
                    employeeUser: employeeUpdated
                })
            }
        }
    })
}

// Tercera función. Esta función responde a la 
// petición de eliminar un trabajador. Esta función
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
    User.findByIdAndDelete(id, (error, employeeDeleted) => {
        if (error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            }) 
        }else{
            if(!employeeDeleted){
                res.send({
                    message: "Error al eliminar el trabajador",
                    statusCode: 400
                })
            }else{
                res.send({
                    message:"Trabajador eliminado correctamente",
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