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

  const [horario, setHorario] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [pagamento, setPagamento] = useState('');


  function limparCampos() {
    setHorario('');
    setPreco('');
    setDescricao('');
    setCategoria('');
    setResponsavel('');
    setPagamento('');

  }

  async function inserir() {
    try {
      const params = {
        horario,
        preco,
        descricao,
        categoria,
        responsavel,
        pagamento,
   
      };

      const url = `http://localhost:3069/despesas${editingId ? `/${editingId}` : ''}`;
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
    const url = 'http://localhost:3069/despesas';
    let resp = await axios.get(url);
    setDespesas(resp.data);
  }

  async function excluir(id) {
    try {
      await axios.delete(`http://localhost:3069/despesas/${id}`);
      toast.success('Item excluído!');
      buscar();
    } catch (error) {
      toast.error('Erro ao excluir item!');
    }
  }

  const editar = (item) => {
    setEditingId(item.id); 
    setHorario(item.horario);
    setPreco(item.preco);
    setDescricao(item.descricao);
    setCategoria(item.categoria);
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
          <button onClick={openPopup}>+ㅤAdd Despesa</button>
        </div>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>{editingId ? 'Editar Despesa' : 'Adicionar Despesa'}</h2>
              <div className="text">
                <label>Horario</label>
                <input type="time" value={horario} onChange={e => setHorario(e.target.value)} />
                <label>Preço</label>
                <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
                <label>Descrição</label>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                <label>Categoria</label>
                <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} />
                <label>Responsavel</label>
                <input type="text" value={responsavel} onChange={e => setResponsavel(e.target.value)} />
                <label>Pagamento</label>
                <input type="text" value={pagamento} onChange={e => setPagamento(e.target.value)} />
              
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
              <div className="horario"><p>Horario</p></div>
              <div className="preco"><p>Preço</p></div>
              <div className="descricao"><p>Descrição</p></div>
              <div className="categoria"><p>Categoria</p></div>
              <div className="responsavel"><p>Responsavel</p></div>
              <div className="pagamento"><p>Pagamento</p></div>
              <div className="acoes"><p>Ações</p></div>
            </header>
            <div className="conteudo">
              {despesas.map(item => (
                <div key={item.id} className="registro">
                  <div className="horario"><p>{item.horario}</p></div>
                  <div className="preco"><p>{item.preco}</p></div>
                  <div className="descricao"><p>{item.descricao}</p></div>
                  <div className="categoria"><p>{item.categoria}</p></div>
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
