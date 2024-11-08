import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ajuda.scss";
import { Link } from 'react-router-dom';

export default function Ajuda() {
  const [expandir, setExpandir] = useState(false);
  const [ativar, setAtivar] = useState(null);
  const [vendas, setVendas] = useState()

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
            { }
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
      <section className="homepage-ajuda">
        <header>
            <h1>Ajuda</h1>
            
        </header>

        <div className="main">




          <div className="perguntas">
    

             <div className="text-titulo">

               <h1>Principais Perguntas</h1>

             </div>

             <hr />
             <div className="pergunta-one">
                <h1>Posso devolver ou trocar um produto?</h1>
                <p>Após a confirmação do envio, você receberá um código de rastreamento por e-mail, que pode ser utilizado no site da transportadora.</p>
             </div>
             
             <hr />
             <div className="pergunta-two">
                <h1>Como posso entrar em contato com o suporte ao cliente?</h1>
                <p>Você pode nos contatar por e-mail, telefone ou através do chat ao vivo disponível no nosso site.</p>
             </div>
             
             <hr />
             <div className="pergunta-three">
                <h1>Vocês oferecem suporte técnico?</h1>
                <p>Sim, oferecemos suporte técnico para nossos produtos. Você pode entrar em contato com nossa equipe de suporte para assistência.</p>
             </div>
             <hr />


          </div>


        </div>
       





      </section>
    </div>
  );
}

