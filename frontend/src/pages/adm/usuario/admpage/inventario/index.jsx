import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./inventario.scss";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Inventario() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const [inventario, setInventario] = useState([]);


  const animation = useSpring({
    width: expandir ? 200 : 60,
    config: { tension: 250, friction: 60 },
  });

  const toggleMenu = () => setExpandir(!expandir);


   async function buscar() {
    const url = 'http://localhost:3069/inventario';
    let resp = await axios.get(url);
    setInventario(resp.data);
  }


  useEffect(() => {
    buscar();
  }, []); 


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
          </div>
        </header>
      </section>
    </div>
  );
}
