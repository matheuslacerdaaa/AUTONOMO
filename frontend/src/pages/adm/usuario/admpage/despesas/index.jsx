import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./despesas.scss";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";


export default function Despesas() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const[despesas, setDespesas] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const[horario, setHorario] = useState('')
  const[preco, setPreco] = useState('')
  const[descricao, setDescricao] = useState('')
  const[categoria, setCategoria] = useState('')
  const[responsavel, setResponsavel] = useState('')
  const[pagamento, setPagemento] = useState('')
  const[status, setStatus] = useState('')


  async function inserir() {
    try {
      const params = {
        "horario": horario,
        "preco": preco,
        "descricao": descricao,
        "categoria": categoria,
        "responsavel": responsavel,
        "pagamento": pagamento
      };
  
      const url = 'http://localhost:3069/despesas';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado! Id: ' + resp.data.novoId);
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
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


  const ativarClick = (index) => {
    setAtivar(index);
  };

  const animation = useSpring({
    width: expandir ? 200 : 60,
    config: { tension: 250, friction: 60 },
  });

  const toggleMenu = () => setExpandir(!expandir);



  return (
    <div className="mae">
    <div>
      <animated.div
        style={animation}
        className={`menu ${expandir ? "menu-aberto" : "menu-fechado"}`}
      >
        <button onClick={toggleMenu} className="menu-toggle">
          {}
          <span>{expandir ? "↩" : "↪"}</span>
        </button>
        <div className="menu-content">
          <div className="expandir">

          <i id="logo">BURGER'S</i>
          <Link to='/admpage'>
            <a
              href="#"
              onClick={() => ativarClick(1)}
              className={ativarClick === 1 ? "ativar" : ""}
            >
              
              <img src="../assets/images/adm/admpage/inicio.png" />
              {expandir && <span>Início</span>}
              
            </a>
            </Link>

            <Link to='/admpage/vendas'>
              <img src="../assets/images/adm/admpage/img2.png" />
              {expandir && <span>Vendas</span>}
            </Link>

            <Link to='/admpage/despesas'>
              <img src="../assets/images/adm/admpage/img3.png" />
              {expandir && <span>Despesas</span>}
            </Link>

            <Link to='/admpage/inventario'>
              <img src="../assets/images/adm/admpage/img5.png" />
              {expandir && <span>Inventário</span>}
            </Link>

            <div className="left">

              <Link to='/admpage/ajuda'>
                <img src="../assets/images/adm/admpage/ajuda.png" />
                {expandir && <span>Ajuda</span>}              
              </Link>

              <Link to='/admpage/sair'>
                <img src="../assets/images/adm/admpage/sair.png" />
                {expandir && <span>Sair</span>}
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
    <section className="homepage-despesas">
      <header>
        <div className="text">
        <h1>Despesas</h1>
    
        </div>
        
     
      </header>


      <div className="btn">
            <button onClick={openPopup}>+ Add Item</button>
          </div>

        <table className="table-despesas">
          <div className="cab-table">
          <thead>
            <tr>
              <th>Horario</th>
              <th>Preco</th>
              <th>Descricao</th>
              <th>Categoria</th>
              <th>Responsavel</th>
              <th>Pagamento</th>
              <th>Status</th>
            </tr>
          </thead>
          </div>
          <div className="inf-table">
          <tbody>
            {despesas.map(item =>
              <tr key={item.id}>
                <td>{item.horario}</td>
                <td>{item.preco}</td>
                <td>{item.descricao}</td>
                <td>{item.categoria}</td>
                <td>{item.responsavel}</td>
                <td>{item.pagamento}</td>
                <td>{item.status || 'teste'}</td>
              </tr>
            )}
          </tbody>
          </div>
        </table>

        {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Itens</h2>

              <div className="text">


            <label htmlFor="">Horario</label>
            <input type="time"value={horario} onChange={e => setHorario(e.target.value)} />

            <label htmlFor="">Preco</label>
            <input type="text" placeholder="digite" value={preco} onChange={e => setPreco(e.target.value)}/>

            <label htmlFor="">Descricao  </label>
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>

            <label htmlFor="">Categoria</label>
            <input type="text" placeholder="digite" value={categoria} onChange={e => setCategoria(e.target.value)}/>

            <label htmlFor="">Responsavel</label>
            <input type="text"  value={responsavel} onChange={e => setResponsavel(e.target.value)} />

            <label htmlFor="">Pagamento</label>
            <input type="text" placeholder="digite" value={pagamento} onChange={e => setPagemento(e.target.value)}/>
           
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
      
    </section>
    <Toaster/>
    </div>
  );
}

