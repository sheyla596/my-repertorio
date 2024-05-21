import express from "express";
const routes = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import { postData, getData, putData, deleteData} from '../opareciones/consultas.js';


routes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });



routes.post("/cancion", async(req,res)=>{
  const { titulo, artista, tono }= req.body; 
  const cancion = [titulo, artista, tono]
const response =  await postData(cancion);
res.json(response);
}) ; 



routes.get('/canciones', async (req,res)=>{
  const response = await getData();//
  res.send(response);
})


routes.put('/cancion/:id',async(req,res)=>{
  const {id}=req.params;
  const {titulo, artista, tono}=req.body;
  const cancion = [titulo, artista, tono, id];
  const result=await putData(cancion);
  res.send('Cambio realizado con éxito')
});



routes.delete("/cancion", async (req, res) => {
  const { id } = req.query; 
  const result = await deleteData(id);
  res.send("Eliminado");
});

export default routes;