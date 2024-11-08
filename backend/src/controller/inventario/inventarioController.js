import { Router } from "express";
import Consultar from "../../repository/inventario/inventarioRepository.js";
import { Inserir } from "../../repository/inventario/inventarioRepository.js";
import { Deletar } from "../../repository/inventario/inventarioRepository.js";
import { Alterar } from "../../repository/inventario/inventarioRepository.js";


const endpoints = Router()


endpoints.get('/inventario', async (req,resp) =>{

try{

let registro = await Consultar()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.post('/inventario', async (req,resp) => {

try{

let item = req.body
let id = await Inserir(item)
resp.send({id:id})
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.put('/inventario/:id', async (req,resp) =>{

try {
let id = req.params.id
let item = req.body
let linhas = await Alterar(id, item)

if(linhas >= 1){
resp.send() 
}else{
resp.status(404).send({erro: 'nenhum registro alterado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}
})



endpoints.delete('/inventario/:id', async (req,resp) =>{

try{
let id = req.params.id
let linhas = await Deletar(id)

if(linhas >= 1){
resp.send()
}else{
resp.status(404).send({erro: 'nenhum registro deletado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}})




export default endpoints;