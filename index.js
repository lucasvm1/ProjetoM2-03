import express from 'express';
import { routes } from './src/routes/routes.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(routes)

app.set('view engine', 'ejs')

app.listen(port, (req, res) =>{
  console.log(`Rodando na porta ${port}`)
})

