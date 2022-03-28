import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')

app.listen(port, (req, res) =>{
  console.log(`Rodando na porta ${port}`)
})

