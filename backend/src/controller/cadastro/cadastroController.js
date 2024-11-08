import { Router } from "express";
import Consultar from "../../repository/cadastro/cadastroRepository.js";
import { Inserir } from "../../repository/cadastro/cadastroRepository.js";
import { Alterar } from "../../repository/cadastro/cadastroRepository.js";
import { Deletar } from "../../repository/cadastro/cadastroRepository.js";

const endpoints = Router()


endpoints.get('/cadastro', async (req, resp) => {

    try {

        let registro = await Consultar()
        resp.send(registro)
    } catch (err) {
        resp.status(400).send({ erro: err.message })
    }
})


endpoints.post('/cadastro', async (req, resp) => {

    try {

        let cadastro = req.body
        let id = await Inserir(cadastro)
        resp.send({ id: id })
    } catch (err) {
        resp.status(400).send({ erro: err.message })
    }
})

endpoints.put('/cadastro/:id', async (req, resp) => {

    try {
        let id = req.params.id
        let cadastro = req.body
        let linhas = await Alterar(id, cadastro)

        if (linhas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({ erro: 'nenhum registro alterado' })
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message })
    }
})


endpoints.delete('/cadastro/:id', async (req, resp) => {

    try {
        let id = req.params.id
        let linhas = await Deletar(id)

        if (linhas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({ erro: 'nenhum registro deletado' })
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message })
    }
})




export default endpoints;