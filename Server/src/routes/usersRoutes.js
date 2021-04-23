const { Router } = require('express')
const router     = Router()

const usersServices = require('../services/usersServices')

router.post('/', async (req, res) => {
    let respuesta = await usersServices.createUser(req.body)

    res.json(respuesta)
})

router.put('/:idUser', async (req, res) => {
    let respuesta = await usersServices.updateUser(req.params.idUser, req.body)

    res.json(respuesta)
})

router.get('/', async(req, res) => {
    let respuesta = await usersServices.getUsers()

    res.json(respuesta)
})

router.delete('/:idUser', async(req, res) => {
    let respuesta = await usersServices.deleteUser(req.params.idUser)

    res.json(respuesta)
})

module.exports = router