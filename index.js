
const express = require('express');
require('dotenv').config();
const dbConnection = require('./database/config');
const cors = require('cors');

//Crear el servidor de express

const app = express();

//base de datos

dbConnection();

//cors
app.use(cors());

// Directorio publico

app.use(express.static('public'));
//app.use(express.static(`${__dirname}/storage/images`))
//app.use(express.static(`/storage/images`))
app.use(('public', express.static(`${__dirname}/storage/images`)));


// Lectura y parseo del body

app.use( express.json() );

//Rutas
app.use('/api/login', require('./routs/usuario'));
app.use('/api/participante', require('./routs/participante'));
app.use('/api/imagen', require('./routs/imagen'));

// Escuchar peticiones

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`Servidor corriendo en puerto ${port}` );
} )
