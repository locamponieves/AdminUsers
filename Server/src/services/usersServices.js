const userModel = require('../models/usersModel')
const utils     = require('../utils/utils')

exports.createUser = async function(body) {
    let respuesta = await validateUser(body, "Guardado correctamente")
    
    if(respuesta.error) return respuesta

    let result = userModel.createUser(body)

    return result.then(row => {
        return respuesta
    }).catch(err => {
        respuesta.error = true
        
        respuesta.code = 1
        
        respuesta.msg = validateException(err);
        
        return respuesta;
    })
}

exports.updateUser = async function(idUser, body) {
    let respuesta = await validateUser(body, "Modificado correctamente")
    
    if(respuesta.error) return respuesta

    let result = userModel.updateUser(idUser, body)

    return result.then(row => {
        return respuesta
    }).catch(err => {
        respuesta.error = true
        
        respuesta.code = 1
        
        respuesta.msg = validateException(err)
        
        return respuesta
    })
}

exports.getUsers = async function() {
    let result = userModel.getUsers()

    return result.then(row => {
        return result
    })
}

exports.deleteUser = async function(idUser) {
    let result = userModel.deleteUser(idUser)

    return result.then(row => {
        return { error: false, code: 0, msg: "Eliminado correctamente" }
    }).catch(err => {
        return { error: true, code: 1, msg: "Error al eliminar usuario" }
    })
}

async function validateUser(data, msg) {
    if(data.Dni      == undefined || data.Dni.trim()      == "" || data.Dni      == null) return {error: true, code: 1, msg: "Campo Dni no válido"}
    if(data.Name     == undefined || data.Name.trim()     == "" || data.Name     == null) return {error: true, code: 1, msg: "Campo Nombre no válido"}
    if(data.LastName == undefined || data.LastName.trim() == "" || data.LastName == null) return {error: true, code: 1, msg: "Campo Apellido no válido"}
    if(data.Email    == undefined || data.Email.trim()    == "" || data.Email    == null) return {error: true, code: 1, msg: "Campo Email no válido"}
    if(data.Phone    == undefined || data.Phone.trim()    == "" || data.Phone    == null) return {error: true, code: 1, msg: "Campo Teléfono no válido"}

    if(!utils.validarEmail(data.Email.trim())) return { error: true, code: 1, msg: "El Email ingresado no es válido" }

    if(!utils.validarNumber(data.Dni.trim())) return { error: true, code: 1, msg: "El Dni debe ser númerico" }

    if(!utils.validarNumber(data.Phone.trim())) return { error: true, code: 1, msg: "El número teléfonico debe ser númerico" }

    return { error: false, code: 0, msg }
}

function validateException(err){
    //duplicidad en index
    if(err.errno == 1062) {
        if(err.sqlMessage.includes("Dni")) {
            return "El número de identificación ya se encuentra registrado";
        }

        if(err.sqlMessage.includes("Email")) {
            return "El email ya se encuentra registrado";
        }
    }
}