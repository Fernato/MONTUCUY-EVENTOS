require('dotenv').config();
const {Schema, model, default: mongoose } = require('mongoose');
const participanteModel = mongoose.model('participanteModel')

const imagenSchema = Schema({

    titulo:{
        type: String,
        require: true
    },

    descripcion:{
        type: String,
    },

    lugar:{
        type: String
    },


    url:{
        type: String,
    },
    
    idParticipante:{
        type: Schema.ObjectId,
        ref: 'participanteModel'
    }
    
});


imagenSchema.methods.setImagen = function setImagen (filename) {

   //const host = process.env.PUBLIC_URL || 'http://localhost'
   const host = process.env.PUBLIC_URL || 'https://eventos-montucuy.herokuapp.com'
    const port = process.env.PORT || 5000;
   // this.imagen_001 = `http://localhost:${port}/${filename}`
    //this.url = `${host}:${port}/${filename}`
    this.url = `https://eventos-montucuy.herokuapp.com:${port}/${filename}`

}

module.exports = model('imagenModel', imagenSchema);