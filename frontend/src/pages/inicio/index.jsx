import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import Left from "../../components/adm/left";

export default function Menu() {

  const navigate = useNavigate();
  const [obj, setObj] = useState(null);


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


  const [totalvendas, setTotalvendas] = useState([])


  async function Buscarvendas() {

    const url = 'http://localhost:3069/totalvendas'
    let resp = await axios.get(url)
    setTotalvendas(resp.data)
  }


  useEffect(() => {
    Buscarvendas();
  }, []);

  
  const [totaldespesas, setTotaldespesas] = useState([])


  async function Buscardespesas() {

    const url = 'http://localhost:3069/totaldespesas'
    let resp = await axios.get(url)
    setTotaldespesas(resp.data)
  }


  useEffect(() => {
    Buscardespesas();
  }, []);

  const [total, setTotal] = useState([])


  async function Buscartotal() {

    const url = 'http://localhost:3069/total'
    let resp = await axios.get(url)
    setTotal(resp.data)
  }


  useEffect(() => {
    Buscartotal();
  }, []);











  return (
    <div className="main">

      <div className="esquerda">
        <Left />
      </div>

      <div className="direita">

        <header>

          <h1>Início</h1>

        </header>


        <div className="conteudo">


          <div className="mae">

            <div className="soma">
              <div className="um">

                {totalvendas.map(item => (
                  <h1>{item.total_vendas}</h1>
                ))}
              </div>

              <div className="dois">
                
              {totaldespesas.map(item => (
                  <h1>{item.total_despesas}</h1>
                ))}

              </div>
            </div>

            <div className="total">

              <div className="tres">

                {total.map(item => (
                  <h1>{item.saldo}</h1>
                ))}
              </div>
            </div>
          </div>



        </div>

      </div>


    </div>
  );
}

