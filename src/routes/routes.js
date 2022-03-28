import express from "express";
import { getIndex } from '../controller/MusicasController.js'

export const routes = express.Router()

routes.get("/", getIndex)