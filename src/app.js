import express from 'express';
import { conexion } from './database.js';

const app = express();

app.use(express.json());

conexion.authenticate();

//Uso de rutas

export default app;
