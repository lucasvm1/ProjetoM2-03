import Sequelize from "sequelize"
import	{ connection } from '../database/connection.js'

export const variados = connection.define('variados', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ano:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    album:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    artista: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    iframe:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

// const initTable = async () => {
//     await variados.sync()
// }