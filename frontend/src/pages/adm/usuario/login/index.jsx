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

    try {
      const usuario = {
        "nome": nome,
        "senha": senha
    }

    const url = `http://localhost:3069/entrar/`
    let resp = await axios.post(url, usuario)

    if (resp.data.erro != undefined) {
        toast.error(resp.data.erro)
        discordErro()
    } else {
        localStorage.setItem('USUARIO', resp.data.token)
        toast.success('Entrou')
        navigate('/admpage')
        discordAcess()
    }
    } catch (error) {
      toast.error('ERRO NA API')
      discordErroApi()
    }
    
    
    
}

async function discordErro(mensagem) {
  try {
    const url = 'https://discord.com/api/webhooks/1302993329910317078/K2ea2xYdOCt3D13K_6_v9rvCGPiX9mp3j9PT5yg5iAHJ1ux762o2Z_PsSPovYg9D_vfj';
    const data = {
      content: `Acesso a ADM`,
      username: 'BOT ADM',
      avatar_url: 'https://forbes.com.br/wp-content/uploads/2021/07/tech-ataqueciber-08072021-bill-hinton-getty.jpg',
      embeds: [
          {
              title: 'Erro',
              description: mensagem,
              color: '16711680'
             
          }    
      ]
  }
  await fetch(url,
    { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
)
  } catch (error) {
    alert('erro!!!!')
  }  
  
  
}
async function discordErroApi(mensagem) {
  try {
    const url = 'https://discord.com/api/webhooks/1302993329910317078/K2ea2xYdOCt3D13K_6_v9rvCGPiX9mp3j9PT5yg5iAHJ1ux762o2Z_PsSPovYg9D_vfj';
    const data = {
      content: `Acesso a ADM`,
      username: 'BOT ADM',
      avatar_url: 'https://forbes.com.br/wp-content/uploads/2021/07/tech-ataqueciber-08072021-bill-hinton-getty.jpg',
      embeds: [
          {
              title: 'Erro na API',
              description: mensagem,
              color: '16711680'
             
          }    
      ]
  }
  await fetch(url,
    { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
)
  } catch (error) {
    alert('erro!!!!')
  }  
  
  
}



async function discordAcess(mensagem) {
  try {
    const url = 'https://discord.com/api/webhooks/1302993329910317078/K2ea2xYdOCt3D13K_6_v9rvCGPiX9mp3j9PT5yg5iAHJ1ux762o2Z_PsSPovYg9D_vfj';
    const data = {
      content: `Acesso a ADM`,
      username: 'BOT ADM',
      avatar_url: 'https://forbes.com.br/wp-content/uploads/2021/07/tech-ataqueciber-08072021-bill-hinton-getty.jpg',
      embeds: [
          {
              title: 'Acessou!',
              description: mensagem,
              color: '65280'
          }    
      ]
  }
  await fetch(url,
    { 
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
)
  } catch (error) {
    alert('erro!!!!')
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