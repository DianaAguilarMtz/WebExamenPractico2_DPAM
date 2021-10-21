
//imports
const express = require("express")
const mongoose = require("mongoose")

//import de un archivo local
const rutasLugar =  require("./routes/lugar")

//crear la app
const app = express()

//middlewares
app.use(express.json())

//endpoints
app.use('/',rutasLugar)


mongoose.connect('mongodb://user2:root@18.234.222.26:27017/base2?authSource=admin')
app.listen(8080,()=>{
    console.log("servidor activo en el puerto 8080")
})