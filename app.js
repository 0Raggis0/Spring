
const express = require("express");
const app = express();

require("dotenv").config({path: './.env'});

const PUERTO = process.env.PUERTO || 5000; // Si no tiene disponible el PUERTO, utiliza el 5000
const cors = require("cors");

//middleware
app.use(express.json());
app.use(express.urlencoded({extends :false}));// capturar cualquier tipo de datos - imagenes
app.use(cors());
//routers
app.use(require("./Routes/router.js"));

app.listen(PUERTO,()=>{
    console.log("Servidor iniciado..." + "puerto " + PUERTO);
});
