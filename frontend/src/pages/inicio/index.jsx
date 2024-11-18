import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import axios from "axios";
import Left from "../../components/adm/left";

export default function Menu() {

  const navigate = useNavigate();
  const [obj, setObj] = useState(null);


  const read = async () => {
    const x = localStorage.getItem('USUARIO');
    if (x) {
      const z = await axios.get(`http://4.172.207.208:5001/readToken/${JSON.parse(x).token}`);
      setObj(z.data)
    } else {
      navigate('/login');
    }
  }



  useEffect(() => {
    read();
  });


  const [primeira, setPrimeira] = useState(0);

  const [t2, setT2] = useState({});

  async function Buscarprimeira() {

    const url = 'http://4.172.207.208:5001/vendasprimeira';
    let resp = await axios.get(url);
    setT2(resp.data[0]);
    setPrimeira(Number(t2.total_vendas));
  }

  useEffect(() => {
    Buscarprimeira();
  });


  const [primeirav, setPrimeirav] = useState([])


  const [segunda, setSegunda] = useState(0)

  const [t, setT] = useState({});

  async function Buscarsegunda() {

    const url = 'http://4.172.207.208:5001/vendassegunda';
    let resp = await axios.get(url);
    setT(resp.data[0]);
    setSegunda((Number(t.total_vendas)));
    console.log(segunda);
  }

  useEffect(() => {
    Buscarsegunda();
  });



  const [terceira, setTerceira] = useState(0)

  const [c, setC] = useState({});

  async function Buscarterceira() {

    const url = 'http://4.172.207.208:5001/vendasterceira';
    let resp = await axios.get(url);
    setC(resp.data[0]);
    setTerceira((Number(c.total_vendas)));
    console.log(terceira);
  }

  useEffect(() => {
    Buscarterceira();
  });



  const [quarta, setQuarta] = useState(0)

  const [d, setD] = useState({});

  async function Buscarquarta() {

    const url = 'http://4.172.207.208:5001/vendasquarta';
    let resp = await axios.get(url);
    setD(resp.data[0]);
    setQuarta((Number(d.total_vendas)));
    console.log(quarta);
  }

  useEffect(() => {
    Buscarquarta();
  });






  const [primeiraD, setPrimeiraD] = useState(0)

  const [e, setE] = useState({});

  async function Buscarprimeirad() {

    const url = 'http://4.172.207.208:5001/despesasprimeira';
    let resp = await axios.get(url);
    setE(resp.data[0]);
    setPrimeiraD((Number(e.total)));

  }

  useEffect(() => {
    Buscarprimeirad();
  });


  const [segundaD, setSegundaD] = useState(0)

  const [f, setF] = useState({});

  async function BuscarsegundaD() {

    const url = 'http://4.172.207.208:5001/despesassegunda';
    let resp = await axios.get(url);
    setF(resp.data[0]);
    setSegundaD((Number(f.total)));

  }

  useEffect(() => {
    BuscarsegundaD();
  });



  const [terceiraD, setTerceiraD] = useState(0)

  const [g, setG] = useState({});

  async function BuscarterceiraD() {

    const url = 'http://4.172.207.208:5001/despesasterceira';
    let resp = await axios.get(url);
    setG(resp.data[0]);
    setTerceiraD((Number(g.total)));

  }

  useEffect(() => {
    BuscarterceiraD();
  });


  const [quartaD, setQuartaD] = useState(0)

  const [h, setH] = useState({});

  async function BuscarquartaC() {

    const url = 'http://4.172.207.208:5001/despesasquarta';
    let resp = await axios.get(url);
    setH(resp.data[0]);
    setQuartaD((Number(h.total)));

  }

  useEffect(() => {
    BuscarquartaC();
  },);



  const [primeira1, setPrimeira1] = useState([])

  async function buscar1() {
    const url = 'http://4.172.207.208:5001/vendasprimeira';
    let resp = await axios.get(url);
    setPrimeira1(resp.data);
  }

  useEffect(() => {
    buscar1();
  },[]);


  const [primeira2, setPrimeira2] = useState([])

  async function buscar2() {
    const url = 'http://4.172.207.208:5001/vendassegunda';
    let resp = await axios.get(url);
    setPrimeira2(resp.data);
  }

  useEffect(() => {
    buscar2();
  },[]);



  const [primeira3, setPrimeira3] = useState([])

  async function buscar3() {
    const url = 'http://4.172.207.208:5001/vendasterceira';
    let resp = await axios.get(url);
    setPrimeira3(resp.data);
  }

  useEffect(() => {
    buscar3();
  },[]);








  const [primeira4, setPrimeira4] = useState([])

  async function buscar4() {
    const url = 'http://4.172.207.208:5001/vendasquarta';
    let resp = await axios.get(url);
    setPrimeira4(resp.data);
  }

  useEffect(() => {
    buscar4();
  },[]);



  const [totalbruto, setTotalbruto] = useState([])

  async function buscarbruto() {
    const url = 'http://4.172.207.208:5001/totalbruto';
    let resp = await axios.get(url);
    setTotalbruto(resp.data);
  }

  useEffect(() => {
    buscarbruto();
  },[]);


  const [segunda1, setSegunda1] = useState([])

  async function buscars1() {
    const url = 'http://4.172.207.208:5001/despesasprimeira';
    let resp = await axios.get(url);
    setSegunda1(resp.data);
  }

  useEffect(() => {
    buscars1();
  },[]);



  const [segunda2, setSegunda2] = useState([])

  async function buscars2() {
    const url = 'http://4.172.207.208:5001/despesassegunda';
    let resp = await axios.get(url);
    setSegunda2(resp.data);
  }

  useEffect(() => {
    buscars2();
  },[]);


  const [segunda3, setSegunda3] = useState([])

  async function buscars3() {
    const url = 'http://4.172.207.208:5001/despesasterceira';
    let resp = await axios.get(url);
    setSegunda3(resp.data);
  }

  useEffect(() => {
    buscars3();
  },[]);




  const [segunda4, setSegunda4] = useState([])

  async function buscars4() {
    const url = 'http://4.172.207.208:5001/despesasquarta';
    let resp = await axios.get(url);
    setSegunda4(resp.data);
  }

  useEffect(() => {
    buscars4();
  },[]);


  
  const [totallucro, setTotallucro] = useState([])

  async function buscarlucro() {
    const url = 'http://4.172.207.208:5001/total';
    let resp = await axios.get(url);
    setTotallucro(resp.data);
  }

  useEffect(() => {
    buscarlucro();
  },[]);






  const data = [
    {
      name: '1° Semana',
      Bruto: primeira,
      Lucro: primeiraD,
      amt: 2400,
    },
    {
      name: '2° Semana',
      Bruto: segunda,
      Lucro: segundaD,
      amt: 2210,
    },
    {
      name: '3° Semana',
      Bruto: terceira,
      Lucro: terceiraD,
      amt: 2290,
    },
    {
      name: '4° Semana',
      Bruto: quarta,
      Lucro: quartaD,
      amt: 2000,
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




            <BarChart width={730} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Bruto" fill="#e5b000" />
              <Bar dataKey="Lucro" fill="#000000" />
            </BarChart>


          </div>

          <div className="total">

            <header>

              <div className="rs"><p>R$</p></div>
              <div className="primeira"><p>1° Semana</p></div>
              <div className="segunda"><p>2° Semana</p></div>
              <div className="terceira"><p>3° Semana</p></div>
              <div className="quarta"><p>4° Semana</p></div>
              <div className="saldo"><p>Total</p></div>

            </header>

            <div className="conteudo-tabela">
              <div className="registro">
                <div className="Bruto"><p>Bruto</p></div>

             
                {primeira1.map(item => (
                <div className="Primeira"><p>{Math.floor(item.total_vendas)}</p></div>
                ))}
               {primeira2.map(item => (
                  <div className="Segunda"><p>{Math.floor(item.total_vendas)}</p></div>
               ))}
               {primeira3.map(item => (
                  <div className="Terceira"><p>{Math.floor(item.total_vendas)}</p></div>
               ))}
                {primeira4.map(item => (
                <div className="Quarta"><p>{Math.floor(item.total_vendas)}</p></div>
                ))}
                {totalbruto.map(item => (
                <div className="saldo"><p>{Math.floor(item.total_vendas)}</p></div>
                ))}

      
              </div>
              <div className="registro">
                <div className="Lucro"><p>Lucro</p></div>
                
                {segunda1.map(item => (
                <div className="Primeira"><p>{Math.floor(item.total)}</p></div>
                ))}

               {segunda2.map(item => (
                  <div className="Segunda"><p>{Math.floor(item.total)}</p></div>
               ))}
               {segunda3.map(item => (
                  <div className="Terceira"><p>{Math.floor(item.total)}</p></div>
               ))}
                {segunda4.map(item => (
                <div className="Quarta"><p>{Math.floor(item.total)}</p></div>
                ))}
                {totallucro.map(item => (
                <div className="saldo"><p>{Math.floor(item.saldo)}</p></div>
                ))}
              </div>
            </div>

          </div>


        </div>

      </div>


    </div>
  );
}

