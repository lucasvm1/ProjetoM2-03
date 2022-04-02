import {
    variados
} from '../model/musicas.js'

export const getIndex = async (req, res) => {
    try {
        const musicas = await variados.findAll();
        res.render('index.ejs', {
            musicas
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const musica = await variados.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            musica
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await variados.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (err) {
        res.send({
            err: err.message
        })
    }
}

export const getAdicionar = (req, res) => {
    res.render('adicionar.ejs')
}

export const postAdicionar = (req, res) => {
    console.log(req.body)
    const { nome, img, ano, album, artista, iframe } = req.body
}