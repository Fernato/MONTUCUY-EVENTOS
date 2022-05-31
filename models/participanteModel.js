const {Schema, model } = require('mongoose');
require('dotenv').config();

const participanteSchema = Schema({

    cedula:{
        type: String,
        require: true
    },

    nombre:{
        type: String,
    },

    apellidos:{
        type: String,
    },
    edad:{
        type: Number
    },
    correo:{
        type: String
    },
    cedular:{
        type: Number
    },
    direccion:{
        type: String
    },
    imagen_001:{
        type: String
    }
    
});


/*
participanteSchema.methods.setImagen = function setImagen (filename) {

   const host = process.env.PUBLIC_URL || 'http://localhost'
    const port = process.env.PORT || 5000;
   // this.imagen_001 = `http://localhost:${port}/${filename}`
    this.imagen_001 = `${host}:${port}/${filename}`

}
*/

module.exports = model('participanteModel', participanteSchema);