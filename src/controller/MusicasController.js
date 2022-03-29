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