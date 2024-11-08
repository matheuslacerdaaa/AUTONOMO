import con from "../connection.js"

export default async function Consultar(){

    const comando = `
    
    select id_cadastro  id,
            nm_nome     nome,
            ds_email    email,
            ds_senha    senha
    from  tb_cadastro
    `
    
    let resposta = await con.query(comando)
    let registro = resposta[0]
    
    return registro
}


export async function Inserir(cadastro){

    const comando = `
    insert into tb_cadastro(nm_nome, ds_email, ds_senha)
                values   (?,?,?); 
    `
    
    let resposta = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha])
    let registro = resposta[0]
    return registro.insertId
}


export async function Alterar(cadastro, id){
    const comando = `
    
    update tb_cadastro
    set nm_nome = ?,
        ds_email = ?,
        ds_senha = ?
    where id_cadastro = ?;         
    `
    
    
    let resposta = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha, id])
    let registro = resposta[0]
    
    return registro.affectedRows
}

export async function Deletar (id){

    const comando = `
    delete from tb_cadastro
    where id_cadastro = ?;
        `
    let resposta = await con.query(comando, [id])
    let registro = resposta[0]
        
    return registro.affectedRows
        
        
    }