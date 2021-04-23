const mysql = require('mysql')

require('dotenv').config()

const connectDB = mysql.createConnection({
    host     : process.env.HOST_DATABASE,
    user     : process.env.USER_DATABASE,
    password : process.env.PASSWORD_DATABASE,
    database : process.env.DATABASE,
    port     : process.env.DATABASE_PORT,
})

connectDB.connect(function(err) {
    if(err) return console.log(`Error al conectar con Mysql: ${err}`)

    console.log('Conectado correctamente a Mysql')
})

module.exports = connectDB