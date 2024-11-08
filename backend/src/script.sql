create database SKYBLUE;
use SKYBLUE;





create table tb_vendas(
id_vendas int primary key auto_increment,
hr_horario datetime,
ds_preco decimal (16,2),
nm_produto varchar (200),
nr_quantidade int,
nm_cliente varchar (200),
nm_vendedor varchar (200)
);





create table tb_despesas (
id_despesas int primary key auto_increment,
hr_horario datetime,
ds_preco  decimal (16,2),
ds_descricao	varchar(200),	
nm_categoria	varchar(200),
nm_responsavel	varchar(200),
ds_pagamento	varchar(200)
);

 
create table tb_cadastro(
	id_cadastro int primary key auto_increment,
	nm_nome varchar(200),
	ds_email varchar(200),	
    ds_senha varchar(200)
);	


create table tb_usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nm_usuario VARCHAR(200),
    ds_email VARCHAR(200),
    ds_senha VARCHAR(200)

);

	create table tb_pedidos(
	id_pedidos int primary key auto_increment,
	ds_data date,
	ds_preco decimal (16,2),
	nm_cliente	varchar(200),
	nm_produto varchar(200),
	nr_quantidade int,
	nm_vendedor varchar (200),
	ds_tipovenda varchar(200)

);


create table tb_inventario(
id_inventario int primary key auto_increment,
nm_item varchar (200),
ds_categoria varchar(200),
ds_dataadiconado date,
nr_estoque int,
ds_datavalidade date,
ds_fornecedor varchar(200),
ds_status varchar(200)
);