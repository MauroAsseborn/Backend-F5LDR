import { Sequelize } from 'sequelize'
import { DB_PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from './config.js'

export const conexion = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    port: DB_PORT,
    host: DB_HOST,
})
