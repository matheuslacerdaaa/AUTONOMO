import React, { useState, useEffect } from "react";
import "./inventario.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Left from "../../../../../components/adm/left";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Inventario() {
  const [inventario, setInventario] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [editingId, setEditingId] = useState(null); 


  const openPopup = () => setShowPopup(true);
  const closePopup = () => {
    setShowPopup(false);
    setEditingId(null); 
    limparCampos();
  };

  const [entrada, setEntrada] = useState('')
  const [descricao, setDescricao] = useState('')
  const [nota, setNota] = useState('')
  const [validade, setValidade] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [valor, setValor] = useState('')


  function limparCampos() {
    setEntrada('');
    setDescricao('');
    setNota('');
    setValidade('');
    setQuantidade('');
    setValor('');


  }




  async function inserir() {
    try {
      const params = {

        "entrada": entrada,
        "descricao": descricao,
        "nota": nota,
        "validade": validade,
        "quantidade": quantidade,
        "valor": valor
      };

       const url = `http://localhost:3069/inventario${editingId ? `/${editingId}` : ''}`;
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
    const url = 'http://localhost:3069/inventario';
    let resp = await axios.get(url);
    setInventario(resp.data);
  }


  async function excluir(id) {
    try {
      await axios.delete(`http://localhost:3069/inventario/${id}`);
      toast.success('Item excluído!');
      buscar();
    } catch (error) {
      toast.error('Erro ao excluir item!');
    }
  }

  const editar = (item) => {
    setEditingId(item.id); 
    setEntrada(item.entrada);
    setDescricao(item.descricao);
    setNota(item.nota);  
    setValidade(item.validade);
    setQuantidade(item.quantidade);      
    setValor(item.valor);

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
          <h1>Inventario</h1>
        </header>

        <div className="btn">
          <button onClick={openPopup}>+ㅤAdd Item</button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Adicionar Itens</h2>

              <div className="text">
                <label htmlFor="">Entrada</label>
                <input type="date" min="2024-11-01" max="2024-11-30"  placeholder="digite..." value={entrada} onChange={e => setEntrada(e.target.value)} />

                <label htmlFor="">Descrição</label>
                <input type="text" placeholder="digite..." value={descricao} onChange={e => setDescricao(e.target.value)} />

          

                <label htmlFor="">Nota Fiscal</label>
                <input type="text" placeholder= 'digite...' value={nota} onChange={e => setNota(e.target.value)}/>


                <label htmlFor="">Validade</label>
                <input type="date" min="2024-11-01" max="2024-11-30" placeholder="digite..." value={validade} onChange={e => setValidade(e.target.value)} />

                <label htmlFor="">Quantidade</label>
                <input type="text" placeholder="digite..." value={quantidade} onChange={e => setQuantidade(e.target.value)} />

                <label htmlFor="">Valor</label>
                <input type="text" placeholder="digite..." value={valor} onChange={e => setValor(e.target.value)} />


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
              <div className="horario"><p>Entrada</p></div>
              <div className="preco"><p>Descrição</p></div>
              <div className="descricao"><p>Nota fiscal</p></div>
              <div className="categoria"><p>Validade</p></div>
              <div className="responsavel"><p>Quantidade</p></div>
              <div className="pagamento"><p>Valor</p></div>
              <div className="acoes"><p></p></div>
            </header>

            <div className="conteudo">
              {inventario.map(item => (
                <div key={item.id} className="registro">
                 <div className="horario"><p>{item.entrada.split('-').reverse().join('/')}</p></div>
                  <div className="preco"><p>{item.descricao}</p></div>
                  <div className="descricao"><p>{item.nota}</p></div>
                  <div className="categoria"><p>{item.validade.split('-').reverse().join('/')}</p></div>
                  <div className="responsavel"><p>{item.quantidade}</p></div>
                  <div className="pagamento"><p>{item.valor}</p></div>
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

