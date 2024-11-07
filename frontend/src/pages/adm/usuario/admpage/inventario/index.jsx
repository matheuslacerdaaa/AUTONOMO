import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./inventario.scss";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

export default function Inventario() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const [inventario, setInventario] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const[nome, setNome] = useState('')
  const[categoria, setCategoria] = useState('')
  const[adicionado, setAdicionado] = useState('')
  const[estoque, setEstoque] = useState('')
  const[validade, setValidade] = useState('')
  const[fornecedor, setFornecedor] = useState('')
  const[status, setStatus] = useState('')

  async function inserir() {
    try {
      const params = {
        "nome": nome,
        "categoria": categoria,
        "adicionado": adicionado,
        "estoque": estoque,
        "validade": validade,
        "fornecedor": fornecedor,
        "status": status
      };
  
      const url = 'http://localhost:3069/inventario';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado! Id: ' + resp.data.novoId);
    } catch (error) {
      console.error('Erro ao adicionar item:', error); // Loga o erro para depuração
      toast.error('Erro ao adicionar item!'); // Exibe um erro mais amigável para o usuário
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

  const animation = useSpring({
    width: expandir ? 200 : 60,
    config: { tension: 250, friction: 60 },
  });

  const toggleMenu = () => setExpandir(!expandir);


  


  const ativarClick = (index) => {
    setAtivar(index);
  };

  return (
    <div className="mae">
      <div>
        <animated.div
          style={animation}
          className={`menu ${expandir ? "menu-aberto" : "menu-fechado"}`}
        >
          <button onClick={toggleMenu} className="menu-toggle">
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
      <section className="homepage-inventario">
        <header id="cabecalho">
          <div className="text">
            <h1>Inventário</h1>
          </div>

          
        </header>
        <div className="btn">
            <button onClick={openPopup}>+ Add Item</button>
          </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Adicionado</th>
              <th>Estoque</th>
              <th>Validade</th>
              <th>Fornecedor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {inventario.map(item =>
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.categoria}</td>
                <td>{new Date(item.adicionado).toLocaleDateString()}</td>
                <td>{item.estoque}</td>
                <td>{new Date(item.validade).toLocaleDateString()}</td>
                <td>{item.fornecedor}</td>
                <td>{item.status}</td>
              </tr>
            )}
          </tbody>
        </table>

        {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Itens</h2>

            <label htmlFor="">Nome</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

            <label htmlFor="">Categoria</label>
            <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>

            <label htmlFor="">Data  </label>
            <input type="date" value={adicionado} onChange={e => setAdicionado(e.target.value)}/>

            <label htmlFor="">Qtd. Estoque</label>
            <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/>

            <label htmlFor="">Data Validade</label>
            <input type="date" value={validade} onChange={e => setValidade(e.target.value)} />

            <label htmlFor="">Fornecedor</label>
            <input type="text" value={fornecedor} onChange={e => setFornecedor(e.target.value)}/>

            <label htmlFor="">Status</label>
            <input type="text" value={status} onChange={e => setStatus(e.target.value)} />

            <p className="fa-solid fa-times" onClick={closePopup}></p>
            <button onClick={inserir}>Adicionar</button>
          </div>
        </div>
      )}
      </section>

      <Toaster/>
    </div>
  );
}
