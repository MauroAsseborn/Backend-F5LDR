import { Sequelize } from 'sequelize'

export const conexion = new Sequelize('f5ldr', 'root', 'root', {
    dialect: 'mysql',
    port: 3306,
    host: 'localhost',
})
