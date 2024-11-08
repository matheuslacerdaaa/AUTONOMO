
import con from "../connection.js"

export default async function Consultar(){

    const comando = `
    
    select id_despesas  id,
            hr_horario  horario,
            ds_preco    preco,
            ds_descricao  descricao,
            nm_categoria   categoria,
            nm_responsavel  responsavel,
            ds_pagamento pagamento,
            ds_status   status
    from  tb_despesas
    `
    
    let resposta = await con.query(comando)
    let registro = resposta[0]
    
    return registro
    }



export async function Inserir(despesa){

const comando = `


insert into tb_despesas(hr_horario,ds_preco, ds_descricao, nm_categoria, nm_responsavel, ds_pagamento, ds_status)
			values   (?,?,?,?,?,?,?); 
`


let resposta = await con.query(comando, [despesa.horario, despesa.preco, despesa.descricao, despesa.categoria,despesa.responsavel, despesa.pagamento, despesa.status])
let registro = resposta[0]
return registro.insertId
}


export async function Alterar(id, despesa){

    const comando = `
    
    update tb_despesas
    set hr_horario = ?,
        ds_preco = ?,
        ds_descricao = ?,
        nm_categoria = ?,
        nm_responsavel = ?,
        ds_pagamento = ?,
        ds_status = ?
    where id_despesas = ?;    
    `
    
    
let resposta = await con.query(comando, [despesa.horario, despesa.preco, despesa.descricao, despesa.categoria,despesa.responsavel, despesa.pagamento, id])
    let registro = resposta[0]
    
return registro.affectedRows
 }
    

    
 export async function Deletar (id){

const comando = `
delete from tb_despesas
where id_despesas = ?;
    `
let resposta = await con.query(comando, [id])
let registro = resposta[0]
    
return registro.affectedRows
    
    
}
    