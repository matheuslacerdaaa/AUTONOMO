import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Cadastro from './pages/adm/usuario/cadastro';
import Login from './pages/adm/usuario/login';
import Menu from './pages/adm/usuario/admpage/inicio';
import Vendas from './pages/adm/usuario/admpage/vendas';
import Despesas from './pages/adm/usuario/admpage/despesas';
import Inventario from './pages/adm/usuario/admpage/inventario';
import Ajuda from './pages/adm/usuario/admpage/ajuda';
import Sair from './pages/adm/usuario/admpage/sair';

export default function Navegar(){

    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admpage' element={<Menu/>}/>
                <Route path='/admpage/vendas' element={<Vendas/>}/>
                <Route path='/admpage/despesas' element={<Despesas/>}/>
                <Route path='/admpage/inventario' element={<Inventario/>}/>
                <Route path='/admpage/ajuda' element={<Ajuda/>}/>
                <Route path='/admpage/sair' element={<Sair/>}/>

            </Routes>
        </BrowserRouter>
    )
}