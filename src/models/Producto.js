import { DataTypes } from 'sequelize'
import { conexion } from '../database.js'

export const Producto = conexion.define(
    'Producto',
    {
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
    },
    {
        timestamps: true,
    }
)

// Producto.sync()
