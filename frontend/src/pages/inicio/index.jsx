import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import {PieChart, Pie} from 'recharts'


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
  });


  const [totalVendas, setTotalVendas] = useState(0);

  const [t2, setT2] = useState({});

  async function Buscarvendas() {

    const url = 'http://localhost:3069/totalvendas';
    let resp = await axios.get(url);
    setT2(resp.data[0]);
    setTotalVendas(Number(t2.total_vendas));
    console.log(totalVendas);
  }

  useEffect(() => {
    Buscarvendas();
  });


  const [totalDespesas, setTotalDespesas] = useState(0)

  const [t, setT] = useState({});

  async function Buscardespesas() {

    const url = 'http://localhost:3069/totaldespesas';
    let resp = await axios.get(url);
    setT(resp.data[0]);
    setTotalDespesas((Number(t.total_despesas)));
    console.log(totalDespesas);
  }
  
  

  useEffect(() => {
    Buscardespesas();
  });

  const [total, setTotal] = useState([])


  async function Buscartotal() {

    const url = 'http://localhost:3069/total'
    let resp = await axios.get(url)
    setTotal(resp.data)
  }


  useEffect(() => {
    Buscartotal();
  }, []);
  


   const data02 = [
     {
       "name": "Group A",
       "value": totalDespesas,
       fill: "#e5b000"
     },
     {
       "name": "Group B",
       "value": totalVendas,
       fill: "#00000"
     },
   ];









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


         

                    
            <PieChart width={400} height={400}>
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>

            <div className="total">

            {total.map(item => (

                <h1>{item.saldo}</h1>
            ))}

            </div>


         

          </div>



        </div>

      </div>


    </div>
  );
}

