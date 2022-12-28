import { Venta } from '../models/Venta.js'

//Listar todos las ventas
export const listarVentas = async (_req, res) => {
    try {
        const ventas = await Producto.findAll()
        ventas.length ? res.status(200).json(ventas) : res.json({ message: 'No hay ventas para listar' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar una venta por ID
export const listarVenta = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.findByPk(id)
        producto === null ? res.json({ message: 'No hay productos para listar' }) : res.status(200).json(producto)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea una venta nuevo
export const crearVenta = async (req, res) => {
    try {
        const { nombre, valor, stock, stock_minimo } = req.body
        const producto = await Producto.create({ nombre, valor, stock, stock_minimo })
        res.status(201).json({ message: 'Producto Creado Correctamente', Producto_Creado: producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza una venta
export const actualizarVenta = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.findByPk(id)
        producto.set(req.body).save()
        res.status(202).json({ message: 'Producto Actualizado Correctamente', producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra una venta por ID
export const borrarVenta = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.destroy({ where: { id } })
        res.status(202).json({ message: 'Producto Borrado Correctamente', Producto_Borrado: producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
