import { Router } from 'express'
import {
    listarProductos,
    listarProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto,
} from '../controllers/productos.controller.js'

const router = Router()

// Peticiones http
router.get('/productos', listarProductos)
router.get('/productos/:id', listarProducto)
router.post('/productos', crearProducto)
router.put('/productos/:id', actualizarProducto)
router.delete('/productos/:id', borrarProducto)

export default router
