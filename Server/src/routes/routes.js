const { Router } = require('express')
const router     = Router()

router.use('/users',require('./usersRoutes'))

module.exports = router