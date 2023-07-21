const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const Controller = require('../controllers/controller')
const { verifyAdmin, verifyOperator } = require('../middlewares/authentication')
const router = express.Router()


router.post('/register', Controller.register)
router.post('/login', Controller.login)

router.post('/kelurahan', verifyAdmin, Controller.postKelurahan)
router.get('/kelurahan', Controller.getKelurahan)
router.put('/kelurahan/:id', verifyAdmin, Controller.putKelurahan)
router.post('/pasien', verifyOperator, Controller.postPasien)

router.use(errorHandler)

module.exports = router