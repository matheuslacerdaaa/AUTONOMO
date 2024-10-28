import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Cadastro from './pages/adm/usuario/cadastro';
import Login from './pages/adm/usuario/login';

export default function Navegar(){

    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/login' element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    )
}