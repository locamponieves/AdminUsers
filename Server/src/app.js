// Lógica del servidor
const express = require('express')
const cors    = require('cors')
const routes  = require('./routes/routes')

// Tengo disponible las variables de entorno
require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 3000)

// Para que express entienda los objetos JSON
app.use(express.json())

// Para que entienda los datos que vienen de un formulario HTML
app.use(express.urlencoded({extended: false}))

// Me permiter aceptar peticiones de otro servidor
app.use(cors())

// Rutas
app.use('/api', routes)

app.use(express.static(__dirname + '/public'))

// Entrada al Frontend
app.get('/', (req,res) => {
    res.sendFile("public/index.html", { root: __dirname })
})

module.exports = app