import { DataTypes } from 'sequelize'
import { conexion } from '../database.js'

const alias = 'Producto'

const columnas = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    stock_minimo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}

const configuracion = {
    timestamps: true,
}

export const Producto = conexion.define(alias, columnas, configuracion)

// TODO: crear relacion marca_id
// TODO: crear relacion categoria_id
// TODO: crear relacion medida (litros)

// Producto.sync()
