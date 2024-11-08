import { Router } from "express"
import totalVendas from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { totalDespesas } from "../../repository/vendasedepesas/vendasedespesasRepository.js"
import { Total } from "../../repository/vendasedepesas/vendasedespesasRepository.js"


const endpoints = Router()



endpoints.get('/totalvendas', async (req,resp) =>{

try{

let registro = await totalVendas()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.get('/totaldespesas', async (req,resp) =>{

try{

let registro = await totalDespesas()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})


endpoints.get('/total', async (req,resp) =>{

try{

let registro = await Total()
resp.send(registro)
}catch(err){
resp.status(400).send({erro: err.message})
}
})

export default endpoints;