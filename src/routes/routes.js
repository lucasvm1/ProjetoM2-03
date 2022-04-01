import express from "express";
import { getIndex, getDetalhes, getDeletar, getAdicionar } from '../controller/MusicasController.js'

export const routes = express.Router()

routes.get("/", getIndex)
routes.get("/detalhes/:id", getDetalhes)
routes.get('/apagar/:id', getDeletar)
routes.get('/adicionar', getAdicionar)