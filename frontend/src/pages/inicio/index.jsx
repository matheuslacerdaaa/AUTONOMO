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





  return (
   <div className="main">
    
      <Left/>

   </div>
  );
}

