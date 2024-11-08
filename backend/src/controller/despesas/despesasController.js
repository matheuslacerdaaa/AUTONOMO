import { Router } from "express";
import Consultar from "../../repository/despesas/despesasRespository.js";
import { Inserir } from "../../repository/despesas/despesasRespository.js";
import { Alterar } from "../../repository/despesas/despesasRespository.js";
import { Deletar } from "../../repository/despesas/despesasRespository.js";

const endpoints = Router()


endpoints.get('/despesas', async (req,resp) =>{

try{

let registro = await Consultar()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.post('/despesas', async (req,resp) => {

try{

let despesa = req.body
let id = await Inserir(despesa)
resp.send({id:id})
}catch(err){
resp.status(400).send({erro: err.message})
}
})

endpoints.put('/despesas/:id', async (req,resp) =>{

try {
let id = req.params.id
let despesa = req.body
let linhas = await Alterar(id, despesa)

if(linhas >= 1){
resp.send() 
}else{
resp.status(404).send({erro: 'nenhum registro alterado'})
}
}catch(err){
resp.status(400).send({erro: err.message})
}
})



endpoints.delete('/despesas/:id', async (req,resp) =>{

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