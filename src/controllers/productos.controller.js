import { Producto } from '../models/Producto.js'

//Listar todos los productos
export const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll()
        productos.length ? res.status(200).json(productos) : res.json({ message: 'No hay productos para listar' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar un producto por ID
export const listarProducto = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.findByPk(id)
        producto === null ? res.json({ message: 'No hay productos para listar' }) : res.status(200).json(producto)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea un producto nuevo
export const crearProducto = async (req, res) => {
    try {
        const { nombre, valor, stock, stock_minimo } = req.body
        const producto = await Producto.create({ nombre, valor, stock, stock_minimo })
        res.status(201).json({ message: 'Producto Creado Correctamente', Producto_Creado: producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza un producto
export const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.findByPk(id)
        producto.set(req.body).save()
        res.status(202).json({ message: 'Producto Actualizado Correctamente', producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra un producto por ID
export const borrarProducto = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Producto.destroy({ where: { id } })
        res.status(202).json({ message: 'Producto Borrado Correctamente', Producto_Borrado: producto })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
