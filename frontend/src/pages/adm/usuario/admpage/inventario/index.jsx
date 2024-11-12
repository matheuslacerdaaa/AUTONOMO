import React, { useState, useEffect } from "react";
import "./inventario.scss";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Left from "../../../../../components/adm/left";


export default function Inventario() {
  const[inventario, setInventario] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const[nome, setNome] = useState('')
  const[categoria, setCategoria] = useState('')
  const[adicionado, setAdicionado] = useState('')
  const[estoque, setEstoque] = useState('')
  const[validade, setValidade] = useState('')
  const[status, setStatus] = useState('')

  async function inserir() {
    try {
      const params = {
      
          "nome": nome,  
          "categoria": categoria,
          "adicionado": adicionado,
          "estoque": estoque,
          "validade": validade,
          "status": status
      };
  
      const url = 'http://localhost:3069/inventario';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado! Id: ' + resp.data.novoId);
    } catch (error) {
      toast.error('Erro ao adicionar item!'); 
    }
  }
  async function buscar() {
    const url = 'http://localhost:3069/inventario';
    let resp = await axios.get(url);
    setInventario(resp.data);
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
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="digite" value={nome} onChange={e => setNome(e.target.value)} />

            <label htmlFor="">Categoria</label>
            <input type="text" placeholder="digite" value={categoria} onChange={e => setCategoria(e.target.value)}/>

            <label htmlFor="">Dt. Adicionado</label>
            <input type="date" placeholder="digite" value={adicionado} onChange={e => setAdicionado(e.target.value)}/>

            <label htmlFor="">Qtd. Estoque</label>
            <input type="text" placeholder="digite" value={estoque} onChange={e => setEstoque(e.target.value)}/>

            <label htmlFor="">Dt. Validade</label>
            <input type="date" placeholder="digite"  value={validade} onChange={e => setValidade(e.target.value)} />

            <label htmlFor="">Status</label>
            <input type="text" placeholder="digite" value={status} onChange={e => setStatus(e.target.value)}/>


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
                   <div className="horario"><p>Nome</p></div>
                    <div className="preco"><p>Categoria</p></div>
                    <div className="descricao"><p>Dt. Adicionado</p></div>
                    <div className="categoria"><p>Qtd. Estoque</p></div>
                    <div className="responsavel"><p>Dt. Validade</p></div>
                    <div className="pagamento"><p>Status</p></div>
            </header>

              <div className="conteudo">
              {inventario.map(item => (
              <div key={item.id} className="registro">
                <div className="horario"><p>{item.nome}</p></div>
                <div className="preco"><p>{item.categoria}</p></div>
                <div className="descricao"><p>{new Date(item.adicionado).toLocaleDateString()}</p></div>
                <div className="categoria"><p>{item.estoque}</p></div>
                <div className="responsavel"><p>{new Date (item.validade).toLocaleDateString()}</p></div>
                <div className="pagamento"><p>{item.status}</p></div>
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

