const imagenModel = require("../models/imagenModel");
const participanteModel = require("../models/participanteModel");

const crearImagen = async ( req, res = response ) => {

    const {body, file} = req
    const {titulo, descripcion, lugar, _id} = body

    try {

        
       const imagen = await imagenModel({
           titulo,
           descripcion,
           lugar
       })
       imagen.idParticipante = _id

       imagen.setImagen(file.filename)
       imagen.save()
       

        res.status(201).json({
            ok: true,
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }
}

module.exports ={
    crearImagen
}