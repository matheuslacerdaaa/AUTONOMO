import React, { useState, useEffect } from "react";
import "./vendas.scss";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Left from "../../../../../components/adm/left";


export default function Despesas() {
  const[vendas, setVendas] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const[horario, setHorario] = useState('')
  const[preco, setPreco] = useState('')
  const[produto, setProduto] = useState('')
  const[quantidade, setQuantidade] = useState('')
  const[cliente, setCliente] = useState('')
  const[vendedor, setVendedor] = useState('')


  async function inserir() {
    try {
      const params = {
        
       "horario": horario,
       "preco": preco,
       "produto": produto,
       "quantidade": quantidade,
       "cliente" : cliente,
       "vendedor": vendedor
      };
  
      const url = 'http://localhost:3069/vendas';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado!');
    } catch (error) {
      toast.error('Erro ao adicionar item!'); 
    }
  }
  async function buscar() {
    const url = 'http://localhost:3069/vendas';
    let resp = await axios.get(url);
    setVendas(resp.data);
  }


  useEffect(() => {
    buscar();
  }, []);








  return (
    <div className="mae">


    <div className="esquerda">
      <Left/>
    </div>

      <div className="right">

        
          <header>
            <h1>Vendas</h1>
          </header>
          
          <div className="btn">
            <button onClick={openPopup}>+ㅤAdd Venda</button>
          </div>
       
            {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Venda</h2>

              <div className="text">
            <label htmlFor="">Horario</label>
            <input type="time" placeholder="digite" value={horario} onChange={e => setHorario(e.target.value)} />

            <label htmlFor="">Preço</label>
            <input type="text" placeholder="digite" value={preco} onChange={e => setPreco(e.target.value)}/>

            <label htmlFor="">Produto</label>
            <input type="text" placeholder="digite" value={produto} onChange={e => setProduto(e.target.value)}/>

            <label htmlFor="">Quantidade</label>
            <input type="text" placeholder="digite" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>

            <label htmlFor="">Cliente</label>
            <input type="text" placeholder="digite"  value={cliente} onChange={e => setCliente(e.target.value)} />

            <label htmlFor="">Pagamento</label>
            <input type="text" placeholder="digite" value={vendedor} onChange={e => setVendedor(e.target.value)}/>

            </div>

            <div className="btn">
              <button onClick={inserir}>Adicionar</button>
              <button onClick={closePopup}>Fechar</button>
            </div>


          </div>
        </div>
      )}


        <div className="main">
    
          <div className="tabela">
            <header>
                   <div className="horario"><p>Horario</p></div>
                    <div className="preco"><p>Preço</p></div>
                    <div className="descricao"><p>Produto</p></div>
                    <div className="categoria"><p>Quantidade</p></div>
                    <div className="responsavel"><p>Cliente</p></div>
                    <div className="pagamento"><p>Vendedor</p></div>
            </header>

              <div className="conteudo">
              {vendas.map(item => (
              <div key={item.id} className="registro">
                <div className="horario"><p>{item.horario}</p></div>
                <div className="preco"><p>{item.preco}</p></div>
                <div className="descricao"><p>{item.produto}</p></div>
                <div className="categoria"><p>{item.quantidade}</p></div>
                <div className="responsavel"><p>{item.cliente}</p></div>
                <div className="pagamento"><p>{item.vendedor}</p></div>
              </div>
            ))}

              </div>
          </div>
        </div>  
      </div>


  
    <Toaster/>
    </div>
  );
}

