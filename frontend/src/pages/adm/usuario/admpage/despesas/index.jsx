import React, { useState, useEffect } from "react";
import "./despesas.scss";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Left from "../../../../../components/adm/left";


export default function Despesas() {
  const[despesas, setDespesas] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const[horario, setHorario] = useState('')
  const[preco, setPreco] = useState('')
  const[descricao, setDescricao] = useState('')
  const[categoria, setCategoria] = useState('')
  const[responsavel, setResponsavel] = useState('')
  const[pagamento, setPagamento] = useState('')
  const[status, setStatus] = useState('')

  async function inserir() {
    try {
      const params = {
        "horario":       horario,    
        "preco":         preco,      
        "descricao":     descricao,
        "categoria":     categoria,  
        "responsavel":   responsavel,
        "pagamento":     pagamento,  
        "status":         status      
      };
  
      const url = 'http://localhost:3069/despesas';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado! Id: ' + resp.data.novoId);
    } catch (error) {
      toast.error('Erro ao adicionar item!'); 
    }
  }
  async function buscar() {
    const url = 'http://localhost:3069/despesas';
    let resp = await axios.get(url);
    setDespesas(resp.data);
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
            <h1>Despesas</h1>
          </header>
          
          <div className="btn">
            <button onClick={openPopup}>+ㅤAdd Despesa</button>
          </div>
       
            {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Despesa</h2>

              <div className="text">
            <label htmlFor="">Horario</label>
            <input type="time" placeholder="digite" value={horario} onChange={e => setHorario(e.target.value)} />

            <label htmlFor="">Preço</label>
            <input type="text" placeholder="digite" value={preco} onChange={e => setPreco(e.target.value)}/>

            <label htmlFor="">Descrição  </label>
            <input type="text" placeholder="digite" value={descricao} onChange={e => setDescricao(e.target.value)}/>

            <label htmlFor="">Categoria</label>
            <input type="text" placeholder="digite" value={categoria} onChange={e => setCategoria(e.target.value)}/>

            <label htmlFor="">Responsavel</label>
            <input type="text" placeholder="digite"  value={responsavel} onChange={e => setResponsavel(e.target.value)} />

            <label htmlFor="">Pagamento</label>
            <input type="text" placeholder="digite" value={pagamento} onChange={e => setPagamento(e.target.value)}/>

            <label htmlFor="">Status</label>
            <input type="text" placeholder="digite" value={status} onChange={e => setStatus(e.target.value)} />


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
                    <div className="descricao"><p>Descrição</p></div>
                    <div className="categoria"><p>Categoria</p></div>
                    <div className="responsavel"><p>Responsavel</p></div>
                    <div className="pagamento"><p>Pagamento</p></div>
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

