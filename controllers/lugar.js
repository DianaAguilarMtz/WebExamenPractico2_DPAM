const Lugar = require('../models/lugar')
const mongoose = require("mongoose")

exports.postAgregarLugar = async (req,res)=>{
    const lugar = new Lugar(req.body)
    lugar._id = new mongoose.Types.ObjectId()

    //CHECAR SI NO ESTA REPETIDO -- FALTA AUMENTAR CONTADOR 
    const DatoRepetido = await Lugar.findOne({ 
            lugarInteres : req.body.lugarInteres,
            pais : req.body.pais
    });
    
    if (DatoRepetido === null) {
        try{
            //Agregar el documento a la colección
            lugar.contInteres=1
            await lugar.save()
            console.log(lugar)
            console.log("Lugar registrado")
            res.send({operacion:"correcta"})
        }catch(err){
            console.log(err)
            res.send({operacion: "incorrecta"})
        }
    }else{
        await Lugar.findOneAndUpdate({ 
            lugarInteres : req.body.lugarInteres,
            pais : req.body.pais
        },{contInteres:DatoRepetido.contInteres+1})
        console.log("El lugar ya está registrado")
        res.json({estado:"ya existe, contador incrementado"})
        
    }
}

exports.getObtenerLugar=async (req,res)=>{
    const lug = await Lugar.find({pais:req.body.pais}) //modificar para que lo encuentre por pais
    console.log("Obtener lugar")
    console.log(lug)
    res.json(lug)
}