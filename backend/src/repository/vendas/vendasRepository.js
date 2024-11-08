import con from "../connection.js";


export default async function Consultar(){

const comando = `

select id_vendas  id,
        hr_horario  horario,
        ds_preco    preco,
        nm_produto  produto,
        nr_quantidade   quantidade,
        nm_cliente  cliente,
        nm_vendedor vendedor
from  tb_vendas
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function Inserir(venda){

const comando = `


insert into tb_vendas(hr_horario,ds_preco, nm_produto, nr_quantidade, nm_cliente, nm_vendedor)
			values   (?,?,?,?,?,?); 
`


let resposta = await con.query(comando, [venda.horario, venda.preco, venda.produto, venda.quantidade,venda.cliente, venda.vendedor])
let registro = resposta[0]

return registro.insertId
}


export async function Alterar(id, venda){

const comando = `

update tb_vendas
set hr_horario = ?,
    ds_preco = ?,
    nm_produto = ?,
    nr_quantidade = ?,
    nm_cliente = ?,
    nm_vendedor = ?
where id_vendas = ?;    
`

let resposta = await con.query(comando, [venda.horario, venda.preco, venda.produto, venda.quantidade, venda.cliente, venda.vendedor, id])
let registro = resposta[0]

return registro.affectedRows
}

export async function Deletar (id){

const comando = `
delete from tb_vendas
where id_vendas = ?;
`
let resposta = await con.query(comando, [id])
let registro = resposta[0]

return registro.affectedRows


}