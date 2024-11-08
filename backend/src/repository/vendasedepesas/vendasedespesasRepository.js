import con from "../connection.js";

export default async function totalVendas(){

const comando = `

SELECT SUM(ds_preco * nr_quantidade) AS total_vendas
FROM tb_vendas;


`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function totalDespesas(){

const comando = `


SELECT SUM(ds_preco) AS total_despesas
FROM tb_despesas;

`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export  async function Total(){

const comando = `


SELECT 
    (SELECT SUM(ds_preco * nr_quantidade) FROM tb_vendas) - 
    (SELECT SUM(ds_preco) FROM tb_despesas) AS saldo;


`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}











