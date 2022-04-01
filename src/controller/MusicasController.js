import { variados } from '../model/musicas.js'

export const getIndex = async (req, res) => {
    try{
        const musicas = await variados.findAll ();
        res.render('index.ejs', {
            musicas
    })
    }
        catch(err){
            console.log(err.message)
    }
}

export const getDetalhes = async (req, res) => {
    try{
        const musica = await variados.findByPk(req.params.id)
        res.render('detalhes.ejs',{
            musica
        })
    }

    catch(err)
    {
        console.log(err.message)
    }
}