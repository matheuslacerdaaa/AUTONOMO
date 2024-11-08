import con from "../connection.js";



export default async function Consultar() {

        const comando = `

select id_inventario  id,
        nm_item  nome,
        ds_categoria    categoria,
        ds_dataadicionado  adicionado,
        nr_estoque   estoque,
        ds_datavalidade  validade,
        ds_fornecedor fornecedor,
        ds_status    status
from  tb_inventario
`

        let resposta = await con.query(comando)
        let registro = resposta[0]

        return registro
}

export  async function Inserir(item) {
        const comando = `
     
        insert into tb_inventario(nm_item, ds_categoria, ds_dataadicionado, nr_estoque, ds_datavalidade,ds_fornecedor, ds_status)
			values   (?,?,?,?,?,?,?);
     `
     let resposta = await con.query(comando, [item.nome, item.categoria, item.adicionado, item.estoque, item.validade, item.fornecedor, item.status])

     let registro = resposta[0]

     return registro.insertId
}


export async function Alterar(id, item){

        const comando = `
        
        update tb_inventario
        set nm_item = ?,
            ds_categoria = ?,
            ds_dataadicionado = ?,
            nr_estoque = ?,
            ds_datavalidade = ?,
            ds_fornecedor = ?,
            ds_status = ?    
        where id_inventario= ?;    
        `
        
        
    let resposta = await con.query(comando, [item.nome, item.categoria, item.adicionado, item.estoque, item.validade, item.fornecedor, item.status, id])
        let registro = resposta[0]
        
    return registro.affectedRows
}

   
export async function Deletar (id){

        const comando = `
        delete from tb_inventario
        where id_inventario = ?;
            `
        let resposta = await con.query(comando, [id])
        let registro = resposta[0]
            
        return registro.affectedRows
}
            

