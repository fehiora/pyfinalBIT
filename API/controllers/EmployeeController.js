const employee = require('../models/employee');
// Llamamos el modelo para ejecutar las operaciones
// necesarios en cada requerimiento
const Employee = require('../models/employee');

// Primera función. Esta función responde a la 
// petición de creación del trabajador, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function create(req, res) {
    // Variable con una instancia del modelo employee
    // que usaremos para registrar la información de un nuevo paciente
    // en la BD de acuerdo al modelo definido en employee.js
    // La variable employee es una instancia de Employe que permite crear un nuevo 
    //registro en la BD de acuerdo al modelo
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
    employee.convivencia = params.convivencia;
    employee.convivencia = params.per_convivencia;
    employee.per_conv_parentesco = params.per_conv_parentesco;
    employee.per_apoyo = params.per_apoyo;
    employee.per_apoy_parentesco = params.per_apoy_parentesco;
    employee.estado = params.estado;


    // Función para guardar el nuevo registro en el modelo
    employee.save((error, employeecreated) => {
        // Ingresa sí hay un error de servidor
        if (error) {
            console.error(error);
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
            // Ingresa sí no hay error de servidor
        } else {
            // Ingresa sí el trabajador no fue creado
            if (!employeecreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear al trabajador"
                })
                // Ingresa sí el trabajador fue creado con éxito
            } else {
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
function update(req, res) {
    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var dataemployee = req.body;

    // Variable donde asignaremos el 'id' especifico
    // de la petición incluido en el cuerpo (body) 
    // de la petición (req)
    var id = req.params.id;

    // Función para buscar un trabajador y actualizar 
    // los datos del registro en el modelo
    Employee.findByIdAndUpdate(id, dataemployee, (error, employeeUpdated) => {
        if (error) {
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            })
        } else {
            if (!employeeUpdated) {
                res.send({
                    message: "No se modificó el trabajador",
                    statusCode: 400
                })
            } else {
                res.send({
                    message: "Trabajador modificado",
                    statusCode: 200,
                    dataEmployee: employeeUpdated
                })
            }
        }
    })
}


// tercera función. Esta función responde a la 
// petición de consultar un trabajador por un 'documento'
// especificado en el cuerpo de la petición. Trae
// toda la información del usuario correspondiente al 'documento'.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function listOne(req, res) {
    // Variable donde asignaremos el 'documento' especifico,
    // incluido en el cuerpo (body) de la petición (req)
    var documentNumber = req.params.documento;

    Employee.findOne({
        documento: documentNumber
    }, (error, employeeDetalled) => {
        if (error) {
            res.send({
                message: "Error de conexión",
                statusCode: 500
            })
        } else {
            if (!employeeDetalled) {
                res.send({
                    message: "El trabajador no existe",
                    statusCode: 400
                })
            } else {
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
    listOne,
}