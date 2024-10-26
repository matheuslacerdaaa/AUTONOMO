import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './pages/landingpage';


export default function Navegar(){

    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}