import { Sequelize } from 'sequelize';

export const conexion = new Sequelize('f5ldr', 'root', '', {
	dialect: 'mysql',
	port: 3308,
	host: 'localhost',
});
