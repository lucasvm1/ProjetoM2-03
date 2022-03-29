import sequelize, { NOW, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const connection = new Sequelize(
    process.env.DB_USER,
    process.env.DB_PASS,
    process.env.DB_BASE,
    {
        host: process.env.DB_HOST,
        port: 5432,
        dialect: 'postgres'
    }
)