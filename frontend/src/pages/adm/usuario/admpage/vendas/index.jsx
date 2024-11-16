import React, { useState, useEffect } from "react";
import "./vendas.scss";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Left from "../../../../../components/adm/left";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Despesas() {
  const[vendas, setVendas] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [editingId, setEditingId] = useState(null); 


  const openPopup = () => setShowPopup(true);
  const closePopup = () => {
    setShowPopup(false);
    setEditingId(null); 
    limparCampos();
  };

  const[data, setData] = useState('')
  const[produto, setProduto] = useState('')
  const[quantidade, setQuantidade] = useState('')
  const[valor, setValor] = useState('')
  const[pagamento, setPagamento] = useState('')
  const[vendedor, setVendedor] = useState('')


  function limparCampos() {
    setData('');
    setProduto('');
    setQuantidade('');
    setValor('');
    setPagamento('');
    setVendedor('');


  }


  async function inserir() {
    try {
      const params = {
        
       "data": data,
       "produto": produto,
       "quantidade": quantidade,
       "valor": valor,
       "pagamento" : pagamento,
       "vendedor": vendedor
      };
  
      const url = `http://localhost:3069/vendas${editingId ? `/${editingId}` : ''}`;
      if (editingId) {
        await axios.put(url, params);
        toast.success('Item atualizado!');
      } else {
        await axios.post(url, params);
        toast.success('Item adicionado!');
      }

      buscar();
      closePopup();
    } catch (error) {
      toast.error('Erro ao salvar item!');
    }
  }



  async function buscar() {
    const url = 'http://localhost:3069/vendas';
    let resp = await axios.get(url);
    setVendas(resp.data);
  }


  
  async function excluir(id) {
    try {
      await axios.delete(`http://localhost:3069/vendas/${id}`);
      toast.success('Item excluído!');
      buscar();
    } catch (error) {
      toast.error('Erro ao excluir item!');
    }
  }


  const editar = (item) => {
    setEditingId(item.id); 
    setData(item.data);
    setProduto(item.produto);
    setQuantidade(item.quantidade);  
    setValor(item.valor);
    setPagamento(item.pagamento);      
    setVendedor(item.vendedor);

    openPopup();
  };


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
            <button onClick={openPopup}>+ㅤAdd Item</button>
          </div>
       
            {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Venda</h2>

              <div className="text">
            <label htmlFor="">Data</label>
            <input type="date" min="2024-11-01" max="2024-11-30" placeholder="digite..." value={data} onChange={e => setData(e.target.value)} />

            <label htmlFor="">Produto</label>
            <input type="text" placeholder="digite..." value={produto} onChange={e => setProduto(e.target.value)}/>

            <label htmlFor="">Quantidade</label>
            <input type="text" placeholder="digite..." value={quantidade} onChange={e => setQuantidade(e.target.value)}/>

            <label htmlFor="">Valor</label>
            <input type="text" placeholder="digite..." value={valor} onChange={e => setValor(e.target.value)}/>

            <label htmlFor="">F. pagamento</label>
            <input type="text" placeholder="digite..."  value={pagamento} onChange={e => setPagamento(e.target.value)} />

            <label htmlFor="">Vendedor</label>
            <input type="text" placeholder="digite..." value={vendedor} onChange={e => setVendedor(e.target.value)}/>

            </div>

            <div className="btn">
              <button onClick={inserir}>{editingId ? 'Salvar' : 'Adicionar'}</button>
              <button onClick={closePopup}>Fechar</button>
            </div>


          </div>
        </div>
      )}


        <div className="main">
    
          <div className="tabela">
            <header>
                   <div className="horario"><p>Data</p></div>
                    <div className="preco"><p>Produto</p></div>
                    <div className="descricao"><p>Quantidade</p></div>
                    <div className="categoria"><p>Valor</p></div>
                    <div className="responsavel"><p>F. pagamento</p></div>
                    <div className="pagamento"><p>Vendedor</p></div>
                    <div className="acoes"><p></p></div>
            </header>

              <div className="conteudo">
              {vendas.map(item => (
              <div key={item.id} className="registro">
                <div className="horario"><p>{item.data.split('-').reverse().join('/')}</p></div>
                <div className="preco"><p>{item.produto}</p></div>
                <div className="descricao"><p>{item.quantidade}</p></div>
                <div className="categoria"><p>{item.valor}</p></div>
                <div className="responsavel"><p>{item.pagamento}</p></div>
                <div className="pagamento"><p>{item.vendedor}</p></div>
                <div className="acoes">
                    <FaEdit className="icon" onClick={() => editar(item)} />
                    <FaTrash className="icon" onClick={() => excluir(item.id)} />
                </div>
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

