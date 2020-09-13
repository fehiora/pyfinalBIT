
// Llamamos el modelo para ejecutar las operaciones
// necesarios en cada operación
const User = require('../models/user');

// Primera función. Esta función responde a la 
// petición de creación de usuario, recibe dos 
// parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function create(req, res) {
    // Variable con una instancia del modelo user
    // que usaremos para registrar un nuevo usuario
    // en la BD de acuerdo al modelo definido en user.js
    var user = new User(); 

    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var params = req.body;

    // Asignando los datos que vienen incluidos
    // en el objeto 'params' a los atributos 
    // correspondiente en el objeto 'user'
    user.nombre = params.nombre;
    user.apellido = params.apellido;
    user.documento = params.documento;
    user.tarjetaProfesional = params.tarjetaProfesional;
    user.licenciaSo = params.licenciaSo;
    user.celular = params.celular;
    user.email = params.email;
    user.contrasenia = params.contrasenia;

    // Función para guardar el nuevo registro en el modelo
    user.save((error, usercreated) =>{
        // Ingresa sí hay un error de servidor
        if(error){
            console.error(error);
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        // Ingresa sí no hay error de servidor
        }else{
            // Ingresa sí el usuario no fue creado
            if(!usercreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear al usuario"
                })
            // Ingresa sí el usuario fue creado con éxito
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario creado correctamente",
                    userData: usercreated
                })
            }
        }
    })
}

// Segunda función. Esta función responde a la 
// petición de actualización de usuario, recibe dos 
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

    // Función para buscar un usuario y actualizar 
    // los datos del registro en el modelo
    User.findByIdAndUpdate(id, dataUser, (error, userUpdated)=> {
        if(error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            })
        }else{
            if(!userUpdated){
                res.send({
                    message: "No se modificó el usuario",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Usuario modificado",
                    statusCode: 200,
                    dataUser: userUpdated
                })
            }
        }
    })
}

// Tercera función. Esta función responde a la 
// petición de eliminar un usuario. Esta función
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
    User.findByIdAndDelete(id, (error, userDeleted) => {
        if (error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            }) 
        }else{
            if(!userDeleted){
                res.send({
                    message: "Error al eliminar el usuario",
                    statusCode: 400
                })
            }else{
                res.send({
                    message:"Usuario eliminado correctamente",
                    statusCode: 200
                })
            }
        }
    })
}

// Cuarta función. Esta función responde a la 
// petición de listar usuario. Esta función
// no requiere parametros de consulta, y trae 
// un toda la información de los usuarios 
// registrada en la BD.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function listAll(req,res){
    User.find({},(error, userListed) => {
        if(error){
            res.send({
                message: "Error de conexión con el servidor",
                statusCode: 500
            })
        }else{
            if(!userListed){
                res.send({
                    message:"No hay ningún usuario creado",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Esta es la lista de usuarios:",
                    statusCode: 200,
                    data: userListed
                })
            }     
        }
    })
}

// Quinta función. Esta función responde a la 
// petición de consultar un usuario por un 'documento'
// especificado en el cuerpo de la petición. Trae
// toda la información del usuario correspondiente al 'documento'.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function listOne(req,res){
    // Variable donde asignaremos el 'documento' especifico,
    // incluido en el cuerpo (body) de la petición (req)
    var documentNumber = req.params.documento;

    User.findOne({documento: documentNumber}, (error,userDetalled)=>{
        if(error){
            res.send({
                message: "Error de conexión",
                statusCode:500
            })
        }else{
            if(!userDetalled){
                res.send({
                    message: "El usuario no existe",
                    statusCode: 400
                })
            }else{
                res.send({
                    message: "Esta es la información del usuario buscado:",
                    data: userDetalled
                })
            }    
        }
    })
}

// Sexta función. Esta función responde a la 
// petición de ingreso de un usuario a la aplicación
// usando su 'documento' y su correspondiente contraseña, 
// en respuesta devuelve el éxito o fracaso de la acción.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function login(req,res){
    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var params = req.body;

    User.findOne({documento: params.documento}, (error,userLogged)=>{
        // Ingresa sí hay un error de servidor
        if(error){
            res.send({
                message: "Error de conexión",
                statusCode: 500
            })
        }else{
            // Ingresa sí el documento consultado no existe
            if(!userLogged){
                res.send({
                    message: "El usuario no existe",
                    statusCode: 400
                })
            }else{
                // Ingresa sí la contraseña suministrada coincide 
                // con la registrada en la BD
                if(userLogged.contrasenia == params.contrasenia){
                    res.send({
                        message: "Sesión Iniciada",
                        statusCode: 200
                    })
                // Ingresa sí la contraseña suministrada no coincide 
                // con la registrada en la BD
                }else {
                    res.send({
                        message: "Usuario o contraseña no coinciden",
                        statusCode: 204
                    })
                }
            }
        }
    })
}

// Septima función. Esta función responde a la 
// petición de ingreso de un usuario a la aplicación
// usando su 'documento', su correspondiente contraseña, 
// y si tiene o no rol de administrador de la aplicación, 
// en respuesta devuelve el éxito o fracaso de la acción.
// Recibe dos parámetros:
// 'req': objeto con todos lo datos de la petición
// 'res': el objeto a usar para gestionar la respuesta
function adminlogin(req,res){
    // Variable donde asignaremos los datos
    // incluidos en el cuerpo (body) de la petición (req)
    var params = req.body;

    User.findOne({documento: params.documento}, (error,userLogged)=>{
        // Ingresa sí hay un error de servidor
        if(error){
            res.send({
                message: "Error de conexión",
                statusCode: 500
            })
        }else{
            // Ingresa sí el documento consultado no existe en la BD
            if(!userLogged){
                res.send({
                    message: "El usuario no existe",
                    statusCode: 400
                })
            }else{
                // Ingresa sí la contraseña suministrada coincide 
                // con la registrada en la BD
                if(userLogged.contrasenia == params.contrasenia){
                    // Ingresa sí el usuario es administrador
                    if (userLogged.admin){
                        res.send({
                            message: "Sesión Iniciada",
                            statusCode: 200
                        })
                    // Ingresa sí el usuario no es administrador
                    }else{
                        res.send({
                            message: "El usuario no es Administrador",
                            statusCode: 403
                        })
                    }
                // Ingresa sí la contraseña suministrada no coincide 
                // con la registrada en la BD    
                }else {
                    res.send({
                        message: "Usuario o contraseña no coinciden",
                        statusCode: 204
                    })
                }
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
   listAll,
   listOne,
   login,
   adminlogin
}