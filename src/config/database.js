import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

export const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Autenticación con éxito");
        await sequelize.sync();
        console.log("Sincronización con éxito")
    } catch (error) {
        console.log("OCURRIÓ UN ERROR CON LA CONEXIÓN A LA BASE DE DATOS")
    }
}