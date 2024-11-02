import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.scss";
import { Link } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Menu() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);

  const data = [
    {
      name: '1° Semana',
      Vendas: 4000,
      Despesas: 2400,
      amt: 2400,
    },
    {
      name: '2° Semana',
      Vendas: 3000,
      Despesas: 1398,
      amt: 2210,
    },
    {
      name: '3° Semana',
      Vendas: 2000,
      Despesas: 2800,
      amt: 2290,
    },
    {
      name: '4° Semana',
      Vendas: 2780,
      Despesas: 2908,
      amt: 2000,
    }];
  
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
              
              <img src="./assets/images/adm/admpage/inicio.png" />
              {expandir && <span>Início</span>}
              
            </a>
            </Link>

            <Link to='/admpage/vendas'>
              <img src="./assets/images/adm/admpage/img2.png" />
              {expandir && <span>Vendas</span>}
            </Link>

            <Link to='/admpage/despesas'>
              <img src="./assets/images/adm/admpage/img3.png" />
              {expandir && <span>Despesas</span>}
            </Link>

            <Link to='/admpage/inventario'>
              <img src="./assets/images/adm/admpage/img5.png" />
              {expandir && <span>Inventário</span>}
            </Link>

            <div className="left">

              <Link to='/admpage/ajuda'>
                <img src="./assets/images/adm/admpage/ajuda.png" />
                {expandir && <span>Ajuda</span>}              
              </Link>

              <Link to='/admpage/sair'>
                <img src="./assets/images/adm/admpage/sair.png" />
                {expandir && <span>Sair</span>}
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
    <section className="homepage">
      <header>
        <div className="text">
        <h1>Seja Bem Vindo!!</h1>
       
        </div>
      


      </header>
    
      <ResponsiveContainer id='grafico' width="100%" height="70%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 95,
            right: 270,
            left: 200,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Despesas" fill="#000000" activeBar={<Rectangle fill="#323232" stroke="gray" />} />
          <Bar dataKey="Vendas" fill="#E5B000" activeBar={<Rectangle fill="#E9C240" stroke="#E5B000" />} />
        </BarChart>
      </ResponsiveContainer>
      
    </section>
    </div>
  );
}

