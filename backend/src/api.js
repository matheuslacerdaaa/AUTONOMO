import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import Vendas from '../src/controller/vendas/vendasController.js';
import Despesas from '../src/controller/despesas/despesasController.js';
import Cadastro from '../src/controller/cadastro/cadastroController.js';
import Inventario from '../src/controller/inventario/inventarioController.js';
import VendaseDespesas from '../src/controller/vendasedepesas/vendasedespesasController.js';
import Entrar from '../src/controller/entrar/entrarController.js';
import endpointes from './controller/endpointes.js';

const servidor = express()
servidor.use(express.json())
servidor.use(cors())
servidor.use(Vendas, Despesas, Cadastro, Inventario, VendaseDespesas, Entrar)
servidor.use(endpointes);




servidor.listen(process.env.PORT, () => console.log(`A API SUBIU NA PORTA ${process.env.PORT}`))