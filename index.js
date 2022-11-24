const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'));

//Aspectos de Configuración
const { config } =require('./config/index');
//Rutas de mi Aplicación (Controladores)
const moviesApi = require('./routes/moviesRoutes.js');

moviesApi(app);

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});

