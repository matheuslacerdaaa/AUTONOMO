import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import Example from "../adm/usuario/grafico";
import axios from "axios";

export default function Menu() {

  const navigate = useNavigate();

  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const [obj, setObj] = useState(null);

  
  const ativarClick = (index) => {
    setAtivar(index);
  };

  const animation = useSpring({
    width: expandir ? 200 : 60,
    config: { tension: 250, friction: 60 },
  });

  const read = async () => {
    const x = localStorage.getItem('USUARIO');
    if (x) {
      const z = await axios.get(`http://localhost:3069/readToken/${JSON.parse(x).token}`); 
      setObj(z.data)
    } else {
        navigate('/login');
    }
  }



  useEffect(() => {
    read();
  }, []);

  
const aberto = <img src="./assets/images/adm/admpage/aberto.png"/>
const fechado = <img src="./assets/images/adm/admpage/fechado.png"/>

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
                <img className="ajuda" src="./assets/images/adm/admpage/ajuda.png" />
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

      
       
         <Example/>
      
    </section>
    </div>
  );
}

