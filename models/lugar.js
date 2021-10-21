const mongoose = require('mongoose')

const LugarSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lugarInteres:{
        type:String,
        required: true
    },
    pais:{
        type:String,
        required:true
    },
    atraccion:{
        type:String,
        required: true
    },
    contInteres:{
        type:Number,
    }
},{collection:'lugar'})

// Compilar el modelo 
module.exports = mongoose.model('lugar', LugarSchema )