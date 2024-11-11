import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./vendas.scss";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast, {Toaster} from 'react-hot-toast'

export default function Vendas() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const [vendas, setVendas] = useState([])
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
        "cliente": cliente,
        "vendedor": vendedor
      };
  
      const url = 'http://localhost:3069/vendas';
      let resp = await axios.post(url, params);
  
      toast.success('Item adicionado! Id: ' + resp.data.novoId);
    } catch (error) {
      toast.error('Erro ao adicionar item!'); 
    }
  }
  

  const ativarClick = (index) => {
    setAtivar(index);
  };

  const animation = useSpring({
    width: expandir ? 200 : 60,
    config: { tension: 250, friction: 60 },
  });

  const toggleMenu = () => setExpandir(!expandir);

  async function buscar() {
    const url = 'http://localhost:3069/vendas';
    let resp = await axios.get(url);
    setVendas(resp.data);
  }


  useEffect(() => {
    buscar();
  }, []);

  const aberto = <img src="../assets/images/adm/admpage/aberto.png"/>
  const fechado = <img src="../assets/images/adm/admpage/fechado.png"/>
  return (
    <div className="mae">
      <div>
        <animated.div
          style={animation}
          className={`menu ${expandir ? "menu-aberto" : "menu-fechado"}`}
        >
          <button onClick={toggleMenu} className="menu-toggle">
            { }
            <span className={expandir ? "aberto-margin" : "fechado-margin"}>
            {expandir ? aberto : fechado}
          </span>
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

                <Link className="ajuda" to='/admpage/ajuda'>
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
      <section className="homepage-vendas">
        <header>
          <div className="text">
            <h1>Relatorio de Vendas</h1>



          </div>


        </header>
        <div className="btn">
          <button onClick={openPopup}>+ Add Item</button>
        </div>

        <table>
          <thead>
            <tr>

              <th>Horario</th>
              <th>Preço</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Cliente</th>
              <th>Vendedor</th>
            </tr>
          </thead>

          <tbody>
            {vendas.map(item =>
              <tr key={item.id}>
                <td>{item.horario}</td>
                <td>{item.preco}</td>
                <td>{(item.produto)}</td>
                <td>{item.quantidade}</td>
                <td>{(item.cliente)}</td>
                <td>{item.vendedor}</td>
              </tr>
            )}
          </tbody>
        </table>

        {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Adicionar Itens</h2>

              <div className="text">


            <label htmlFor="">Horario</label>
            <input type="time" placeholder="digite" value={horario} onChange={e => setHorario(e.target.value)} />

            <label htmlFor="">Preço</label>
            <input type="text" placeholder="digite" value={preco} onChange={e => setPreco(e.target.value)}/>

            <label htmlFor="">Produto</label>
            <input type="text" value={produto} placeholder="digite" onChange={e => setProduto(e.target.value)}/>

            <label htmlFor="">Quantidade</label>
            <input type="text" placeholder="digite" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>

            <label htmlFor="">N. Cliente</label>
            <input type="text" placeholder="digite" value={cliente} onChange={e => setCliente(e.target.value)} />

            <label htmlFor="">N. Vendedor</label>
            <input type="text" placeholder="digite" value={vendedor} onChange={e => setVendedor(e.target.value)}/>
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

