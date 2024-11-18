import React, { useState, useEffect } from "react";
import "./despesas.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Left from "../../../../../components/adm/left";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Despesas() {
  const [despesas, setDespesas] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editingId, setEditingId] = useState(null); 

  const openPopup = () => setShowPopup(true);
  const closePopup = () => {
    setShowPopup(false);
    setEditingId(null); 
    limparCampos();
  };

  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [pagamento, setPagamento] = useState('');


  function limparCampos() {
    setData('');
    setDescricao('');
    setCategoria('');
    setValor('');
    setResponsavel('');
    setPagamento('');

  }

  async function inserir() {
    try {
      const params = {
        data,
        descricao,
        categoria,
        valor,
        responsavel,
        pagamento,
   
      };

      const url = `http://4.172.207.208:5001/despesas${editingId ? `/${editingId}` : ''}`;
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
    const url = 'http://4.172.207.208:5001/despesas';
    let resp = await axios.get(url);
    setDespesas(resp.data);
  }

  async function excluir(id) {
    try {
      await axios.delete(`http://4.172.207.208:5001/despesas/${id}`);
      toast.success('Item excluído!');
      buscar();
    } catch (error) {
      toast.error('Erro ao excluir item!');
    }
  }

  const editar = (item) => {
    setEditingId(item.id); 
    setData(item.data);
    setDescricao(item.descricao);
    setCategoria(item.categoria);
    setValor(item.valor);
    setResponsavel(item.responsavel);
    setPagamento(item.pagamento);
 
    openPopup();
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="mae">
      <div className="esquerda">
        <Left />
      </div>
      <div className="right">
        <header>
          <h1>Despesas</h1>
        </header>
        <div className="btn">
          <button onClick={openPopup}>+ㅤAdd Item</button>
        </div>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>{editingId ? 'Editar Despesa' : 'Adicionar Despesa'}</h2>
              <div className="text">
                <label>Data</label>
                <input type="date" min="2024-11-01" max="2024-11-30" value={data} onChange={e => setData(e.target.value)} />
                <label>Descrição</label>
                <input type="text" placeholder="digite..." value={descricao} onChange={e => setDescricao(e.target.value)} />
                <label>Categoria</label>
                <input type="text" placeholder="digite..." value={categoria} onChange={e => setCategoria(e.target.value)} />
                <label>Valor</label>
                <input type="text" placeholder= 'digite...' value={valor} onChange={e => setValor(e.target.value)} />
                <label>Responsavel</label>
                <input type="text" placeholder="digite..." value={responsavel} onChange={e => setResponsavel(e.target.value)} />
                <label>F. pagamento</label>
                <input type="text" placeholder="digite..." value={pagamento} onChange={e => setPagamento(e.target.value)} />
              
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
              <div className="preco"><p>Descrição</p></div>
              <div className="descricao"><p>Categoria</p></div>
              <div className="categoria"><p>Valor</p></div>
              <div className="responsavel"><p>Responsavel</p></div>
              <div className="pagamento"><p>F. Pagamento</p></div>
              <div className="acoes"><p></p></div>
            </header>
            <div className="conteudo">
              {despesas.map(item => (
                <div key={item.id} className="registro">
                 <div className="horario"><p>{item.data.split('-').reverse().join('/')}</p></div>
                  <div className="preco"><p>{item.descricao}</p></div>
                  <div className="descricao"><p>{item.categoria}</p></div>
                  <div className="categoria"><p>{item.valor}</p></div>
                  <div className="responsavel"><p>{item.responsavel}</p></div>
                  <div className="pagamento"><p>{item.pagamento}</p></div>
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
      <Toaster />
    </div>
  );
}
