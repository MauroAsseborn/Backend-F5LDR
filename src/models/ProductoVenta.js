import { DataTypes } from 'sequelize'
import { conexion } from '../database.js'

export const ProductoVenta = conexion.define(
    'ProductoVenta',
    {
        id: {
            type: DataTypes.INTEGE,
            autoIncrement: true,
            primaryKey: true,
        },
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Producto', key: 'id' },
        },
    },
    {
        timestamps: true,
    }
)

// Venta.sync()
