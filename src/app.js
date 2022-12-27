import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
config()

import rutaProductos from './routes/productos.routes.js'
import { Producto } from './models/Producto.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

//Uso de rutas
app.use(rutaProductos)

app.use((req, res) => {
    res.status(404).json({ message: 'No se encuentra la pagina' })
})

export default app
