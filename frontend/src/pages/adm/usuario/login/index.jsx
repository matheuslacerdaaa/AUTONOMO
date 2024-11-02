import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

export default function Login() {
  const[nome, setNome] = useState('')
  const[senha, setSenha]= useState('')
  const navigate = useNavigate()
  
  
  async function entrar() {
    const usuario = {
        "nome": nome,
        "senha": senha
    }

    const url = `http://localhost:3069/entrar/`
    let resp = await axios.post(url, usuario)

    if (resp.data.erro != undefined) {
        toast.error(resp.data.erro)
    } else {
        localStorage.setItem('USUARIO', resp.data.token)
        toast.success('Entrou')
        navigate('/admpage')
    }
    
}

  
  
  
  return (
    <div className="secao-login">

      <div className="geral">
       
        <div className="dados">
          <div className="info-login">
            <h1>Login</h1>
            <h3>Bem-vindo de volta! Faça login para acessar sua conta</h3>
          </div>


          <div className="inputs">
          <label htmlFor="">Nome</label>
            <input type="text"
             placeholder='Digite seu nome'
             value={nome}
             onChange={(e)=> setNome(e.target.value)}
              />

            <label htmlFor="">Senha</label>
            <input type="password"
             placeholder='Digite sua senha'
             value={senha}
             onChange={(e)=> setSenha(e.target.value)}
              />

          </div>

          <div className="inf">
         
            

            

          </div>




          <div className="ultp">
              <button onClick={entrar}>Login</button>
              <hr />

              <div className="link">
              <h3>Não tem conta? </h3>
              <a href=""><Link to='/cadastro'>Cadastre-se</Link></a>
              </div>
              
          </div>
        </div>

        <div className="img">
          <img className='imagem' src="./assets/images/adm/usuario/imglogin.png" />
          </div>


        </div>

    <Toaster/>
    
    </div>)
}