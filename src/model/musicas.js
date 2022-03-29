import Sequelize from "sequelize"
import	{ connection } from '../database/connection.js'

const variados = connection.define('variados', {
    id: {
        type: Sequelize.INTEGER,

    },
    nome:{
        type: Sequelize.TEXT,

    },
    img: {
        type: Sequelize.TEXT,

    },
    ano:{
        type: Sequelize.INTEGER,

    },
    letra:{
        type: Sequelize.TEXT,

    },
    artista: {
        type: Sequelize.TEXT,

    },
    iframe:{
        type: Sequelize.TEXT,

    },
})