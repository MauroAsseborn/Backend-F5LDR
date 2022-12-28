import { DataTypes } from 'sequelize'

import { conexion } from '../database.js'
import { Producto } from '../models/Producto.js'

export const Venta = conexion.define(
    'Venta',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        monto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
)

Venta.hasMany(Producto, {
    foreignKey: 'producto_id',
    sourceKey: 'id',
})

Producto.belongsTo(Venta, {
    foreignKey: 'v ',
    targetKey: 'id',
})

// Venta.sync()
