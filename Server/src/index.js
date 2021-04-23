const app = require('./app')

// Arranco el servidor
app.listen(app.get('port'), () => {
    console.log(`Conectado al servidor: http://localhost:${app.get('port')}`)
})