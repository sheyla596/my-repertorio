import express from "express";
import routes from './routes/routes.js';
import path from "path";
const __dirname = import.meta.dirname;
const app = express();
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto http://localhost:${port}`);
  });


//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('img'));
app.use('/', routes);

