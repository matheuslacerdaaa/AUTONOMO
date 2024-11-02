import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./inventario.scss";
import { Link } from 'react-router-dom';

export default function Inventario() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);

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
    <section className="homepage-inventario">
      <header id="cabecalho">
        <div className="text">
        <h1>Inventario</h1>
    
        </div>
      
      <div className="segmentos-inventario">

        <button id="botao-add"> ＋  Add. Item</button>
      </div>

      <div className="table-inventario">
        <header>
        <h1>Horario</h1>
        <h1>Preço</h1>
        <h1>Produto</h1>
        <h1>Quantidade</h1>
        <h1>N.Cliente</h1>
        <h1>Vendedor</h1>
        </header>

        <div className="dados-c1-inventario">
            <p>22:00</p>
            <p>40.0</p>
            <p>X-burguer</p>
            <p>3</p>
            <p>Matheus Lacerda</p>
            <p>Miguel Ferreira</p>
        </div>
       
      </div>
      </header>
      
    </section>
    </div>
  );
}

