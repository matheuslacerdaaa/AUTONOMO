import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [token, setToken] = useState(null)

    var [nome, setNome] = useState('')
    var [email, setEmail] = useState('')
    var [senha, setSenha] = useState('')
    var [confirmarsenha, setConfirmarsenha] = useState('')
    const navigate = useNavigate()
    const { id } = useParams();

    async function salv() {

        let paramsCorpo = {
            "nome": nome,
            "email": email,
            "senha": senha
        }


        

        if (id == undefined) {
            if(confirmarsenha !== senha){
                        toast.error('Senha diferente!')
                        return;
                    }
            else {
                const url = `http://localhost:3069/usuario?x-access-token=${token}`;
                let resp = await axios.post(url, paramsCorpo);
                toast.success('Cadastrado Id: ' + resp.data.novoId);}
        } 
    }

    
    async function consultar(token) {
        if (id != undefined) {
            const url = `http://localhost:3069/cadastro/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            setNome(dados.nome)
            setEmail(dados.email)
            setSenha(dados.senha)
            setConfirmarsenha(dados.confirmarSenha)
        }
    }



    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navigate('/')
        }

        consultar(token);
    }, [])


    return (
        <div className='cadastro'>


            <div className="mae">


                <div className='inputs'>
                    <div className="text">
                        <h2>Cadastrar</h2>
                        <h3>Registre-se e comece a aproveitar as vantagens!</h3>
                    </div>

                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                     placeholder="Digite seu nome"
                     value={nome}
                     onChange={(e) => setNome(e.target.value)}
                      />

                    <label htmlFor="email">Email</label>
                    <input type="text"
                     placeholder='Digite seu email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input type="password"
                     placeholder='Digite sua senha'
                     value={senha}
                     onChange={(e) => setSenha(e.target.value)}
                    />

                    <label htmlFor="confirmarSenha">Confirme a senha</label>
                    <input type="password"
                     placeholder="Digite sua senha"
                     value={confirmarsenha}
                     onChange={(e) => setConfirmarsenha(e.target.value)}

                    />

                    <div className="link">
                        <h3>Já tem conta? Faça  <a href=""><Link to='/login '>Login</Link></a></h3>

                    </div>

                    <hr />
                    <div className="botao-cadastro">
                        <button onClick={salv}> Cadastrar</button>
                    </div>




                </div>
                <img className='imagem' src="./assets/images/adm/usuario/img.png" alt="" />

            </div>

            <Toaster />
        </div>


    )

}

