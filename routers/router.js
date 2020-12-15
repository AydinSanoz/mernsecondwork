const express = require('express')
const router = express.Router()

//endpoint /api

router.use('/categories', CategoryRouter)

router.use('/products', ProductRouter)

module.exports = router