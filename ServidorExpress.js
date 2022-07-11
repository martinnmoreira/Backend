const express = require('express');
const fs = require ('fs')
const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('productos.json');

function productoRandom (array) {
    let rand = Math.floor(Math.random()*array.length);
    return randomValue = array[rand];
}

const aplicacion = express();
const PORT = 8080;

const miServer = aplicacion.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${miServer}.address().port`)
})
miServer.on("error", error => {
    console.log(`Hubo un error en el servidor: ${error}`)
})


aplicacion.get('/', (req, res) => {
    res.send(`<h1 style="color:#86FF33; background-color: black; padding: 84px; text-align: center" > Ingresa a /productos para ver el array de productos </h1>`)
})

productos.getAll().then(datos => respuesta= datos);

aplicacion.get('/productos', (req, res) => {
    res.send(respuesta)
})

aplicacion.get('/productoRandom', (req, res) => {
    res.send(productoRandom(respuesta))
})