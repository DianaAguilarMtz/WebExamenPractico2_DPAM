//imports
const router = require('express').Router()

//controllers
const lugarController = require('../controllers/lugar')


//Create
router.post('/agregarLugar',lugarController.postAgregarLugar)

//Read
router.get('/obtenerLugar',lugarController.getObtenerLugar)



//exportar las rutas
module.exports=router