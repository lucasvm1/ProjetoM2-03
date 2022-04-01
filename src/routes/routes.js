import express from "express";
import { getIndex, getDetalhes } from "../controller/MusicasController.js";

export const routes = express.Router();

routes.get("/", getIndex);
routes.get("/detalhes/:id", getDetalhes);
