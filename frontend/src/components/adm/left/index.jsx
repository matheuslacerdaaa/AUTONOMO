import { useEffect, useState } from "react";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Left() {

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);


  const navigate = useNavigate();
  const [ativar, setAtivar] = useState(null);
  const [obj, setObj] = useState(null);


  const ativarClick = (index) => {
    setAtivar(index);
  };


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



  const [mobilebtn, setMobilebtn] = useState(false);

  function abrirmenu() {
    setMobilebtn(!mobilebtn);
  }

  const icones = mobilebtn ? "fa-times" : "fa-bars";



  return (




    <div className="left">
      <div className="logo-left">
        <p id="logo">BURGER'S</p>
      </div>


      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">



            <h2>Deseja Sair?</h2>

            <div className="btn">
              <a href="/login">Sim</a>
              <button onClick={closePopup}>Não</button>
            </div>
          </div>
        </div>
      )}


      <div className="controle">
        <Link className="inicio" to='/admpage'>
          <img src="../assets/images/adm/admpage/inicio-branco.png" />
          <p>Início</p>
        </Link>


        <Link className="vendas" to='/admpage/vendas'>
          <img src="../assets/images/adm/admpage/img2.png" />
          <p>Vendas</p>
        </Link>


        <Link className="despesas" to='/admpage/despesas'>
          <img src="../assets/images/adm/admpage/img3.png" />
          <p>Despesas</p>
        </Link>

        <Link className="inventario" to='/admpage/inventario'>
          <img src="../assets/images/adm/admpage/inventario-branco.png" />
          <p>Inventário</p>
        </Link>

      </div>

      <div className="operacionais">

        <Link className="ajuda" to='/admpage/ajuda'>
          <img src="../assets/images/adm/admpage/ajuda.png" />
          <p>Ajuda</p>
        </Link>

        <Link onClick={openPopup} className="sair">
          <img src="../assets/images/adm/admpage/sair-branco.png" />
          <p>Sair</p>
        </Link>
      </div>



    





    </div>




      





































  );
}

