const connectDB      = require('../config/database')
const { v4: uuidv4 } = require('uuid')
const moment         = require('moment')

exports.createUser = async function(body) {
    return new Promise((resolve, reject) => {
        let IdUser     = uuidv4()
        let CreateDate = moment().format()

        let strSql = "INSERT INTO users " +
        "(Id,Dni,Name,LastName,Email,Phone,CreateDate) " +
        "VALUES ( " +
        "'" + IdUser        + "', " +
        "'" + body.Dni      + "', " +
        "'" + body.Name     + "', " +
        "'" + body.LastName + "', " +
        "'" + body.Email    + "', " +
        "'" + body.Phone    + "', " +
        "'" + CreateDate    + "' " +
        ")"

        connectDB.query(strSql,(err, rows, fields) => {
            if(err) return reject(err)

            resolve(rows)
        })
    })
}

exports.updateUser = async function(idUser, body) {
    return new Promise((resolve, reject) => {
        let strSql = "UPDATE users SET " +
        "Dni      = '" + body.Dni      + "'," +
        "Name     = '" + body.Name     + "'," +
        "LastName = '" + body.LastName + "'," +
        "Email    = '" + body.Email    + "'," +
        "Phone    = '" + body.Phone    + "'" +
        "WHERE " +
        "Id = '" + idUser + "' "

        connectDB.query(strSql,(err, rows, fields) => {
            if(err) return reject(err)

            resolve(rows)
        })
    })
}

exports.getUsers = async function() {
    return new Promise((resolve, reject) => {
        let strSql = "SELECT Id, Dni, Name, LastName, Email, Phone, CreateDate FROM users"

        connectDB.query(strSql,(err, rows, fields) => {
            if(err) return reject(err)

            resolve(rows)
        })
    })
}

exports.deleteUser = async function(idUser) {
    return new Promise((resolve, reject) => {
        let strSql ="DELETE FROM users " +
        "WHERE " +
        "Id = '" + idUser + "' "

        connectDB.query(strSql,(err, rows, fields) => {
            if(err) return reject(err)

            resolve(rows)
        })
    })
}