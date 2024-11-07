import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./vendas.scss";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Vendas() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const[vendas, setVendas] = useState([])

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
    <section className="homepage-vendas">
      <header>
        <div className="text">
        <h1>Relatorio de Vendas</h1>
    

        <table>
              <thead>
                <tr>

                  <th>Categoria</th>
                  <th>Adicionado</th>
                  <th>Estoque</th>
                  <th>Validade</th>
                  <th>Fornecedor</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {vendas.map(item => 
                  <tr key={item.id}>  
                    <td>{new Date(item.horario).toLocaleTimeString()}</td>
                    <td>{item.preco}</td>
                    <td>{(item.produto)}</td>
                    <td>{item.quantidade}</td>
                    <td>{(item.cliente)}</td>
                    <td>{item.vendedor}</td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>
      

      </header>

      
      
    </section>
    </div>
  );
}

