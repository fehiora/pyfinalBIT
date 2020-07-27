const User = require('../models/user'); //requiriendo el modelo desde el controlador


//función anónima, req son los parámetros que se envía por la URL, el res lo que se devuelve al usuario 

//Primera función en la cual se crean usuarios y se guardan en la base de datos
function create(req, res) {
    var user = new User(); //Variable para crear un nuevo usuario de acuerdo al modelo que esta en user.js
    var params = req.body; // Con estas variable se están obteniendo (con req) los parámetros que vienen del body

    user.nombre = params.nombre;
    user.apellido = params.apellido;
    user.documento = params.documento;
    user.tarjetaProfesional = params.tarjetaProfesional;
    user.licenciaSo = params.licenciaSo;
    user.celular = params.celular;
    user.email = params.email;
    user.contrasenia = params.contrasenia;

    user.save((error, usercreated) =>{
        if(error){
            console.error(error);
            res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
            })
        }else{
            if(!usercreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear al usuario"
                })
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

//Segunda función para modificar datos de los usuarios
function update(req, res){
    var dataUser = req.body;
    var id = req.params.id;

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

//Tercera función para eliminar los datos de los usuarios, en esta función no se necesita traer información del body, solo el id por lo cual solo hay una variable
function remove(req, res){
    var id = req.params.id;

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

//Cuarta función para listar todos los usuarios de la base de mongo
function listAll(req,res){
    User.find((error, userListed) => {
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
                data: userListed
                 })
                }     
        }
    })
}

//Quinta función para buscar usuario por documento
function listOne(req,res){
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

//Sexta función para loging de usuario

function login(req,res){
    var params = req.body;

    User.findOne({documento: params.documento}, (error,userLogged)=>{
        if(error){
            res.send({
                message: "Error de conexión",
                statusCode: 500
            })
        }else{
            if(!userLogged){
                res.send({
                    message: "El usuario no existe",
                    statusCode: 400
                })
            }else{
                if(userLogged.contrasenia == params.contrasenia){
                    res.send({
                        message: "Bienvenido",
                        statusCode: 200
                    })
                }else {
                    res.send({
                    message: "Usuario o contraseña no coinciden",
                    statusCode: 401
                    })
                }
            }
        }
    })
}

//esta es la forma de esportar los métodos del controlador para usarlos en otros archivos
module.exports = {
   create,
   update,
   remove,
   listAll,
   listOne,
   login
}