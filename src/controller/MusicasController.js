import { variados } from "../model/musicas.js";

export const getIndex = async (req, res) => {
  try {
    const musicas = await variados.findAll({
        order:[["id"]]
    })
    res.render("index.ejs", {
      musicas,
    });
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const musica = await variados.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      musica,
    });
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const getDeletar = async (req, res) => {
  try {
    await variados.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const getAdicionar = (req, res) => {
  res.render("adicionar.ejs");
};

export const postAdicionar = async (req, res) => {
  try {
    const { nome, img, ano, album, artista, iframe } = req.body;
    await variados.create({
      nome,
      img,
      ano,
      album,
      artista,
      iframe,
    });
    res.redirect("/");
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
};

export const getEditar = async (req, res) => {
  const musica = await variados.findByPk(req.params.id);
  res.render("editar.ejs", {
    musica,
  });
};

export const postEditar = async (req, res) => {
  const { nome, img, ano, album, artista, iframe } = req.body;
  try{
    await variados.update({
        nome: nome, img: img, ano: ano, album: album, artista: artista, iframe: iframe
    }, {
        where: {
            id: req.params.id,
        }
    })
    res.redirect('/')
  }
  catch(err){
      res.send(err.message)
  }
};
