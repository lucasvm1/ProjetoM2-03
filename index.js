import express from "express";
import path from 'path'
const app = express();

const __dirname = path.resolve(path.dirname(''))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))

const port = process.env.PORT || 3000;

// -- //

app.get('/', (req, res) => {
    res.render('index.ejs')
  })
    
  app.listen(port, (req, res) =>{
    })