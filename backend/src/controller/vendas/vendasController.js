import { Router } from "express";
import Consultar from "../../repository/vendas/vendasRepository.js";
import { Inserir } from "../../repository/vendas/vendasRepository.js";
import { Alterar } from "../../repository/vendas/vendasRepository.js";
import { Deletar } from "../../repository/vendas/vendasRepository.js";

const endpoints = Router()



endpoints.get('/vendas', async (req,resp) =>{

try{

let registro = await Consultar()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.post('/vendas', async (req,resp) => {

try{

let venda = req.body
let id = await Inserir(venda)
resp.send({id:id})
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.put('/vendas/:id', async (req,resp) =>{

try {
let id = req.params.id
let venda = req.body
let linhas = await Alterar(id, venda)

if(linhas >= 1){
resp.send() 
}else{
resp.status(404).send({erro: 'nenhum registro alterado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.delete('/vendas/:id', async (req,resp) =>{

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