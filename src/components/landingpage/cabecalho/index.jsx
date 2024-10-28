import './index.scss';
import { useState } from 'react';

export default function Cabecalho() {
    const [mobilebtn, setMobilebtn] = useState(false);

    function abrirmenu() {
        setMobilebtn(!mobilebtn);
    }

    const icones = mobilebtn ? "fa-times" : "fa-bars" ;

    return (
        <header>
            <nav id="navbar">
                <i className="fa-solid fa-burger" id="logo"> BURGER'S</i> 
                <ul id="nav_list">
                    <li className="nav_item active">
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#menu">Destaques</a>
                    </li>
                    <li className="nav_item">
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className="nav_item">
                        <a href="#avaliar">Avaliação</a>
                    </li>
                </ul>
                <button className="btn-contato">Contato</button>
                <button id="mobile-btn" onClick={abrirmenu}>
                    <i className={`fa-solid ${icones}`}></i>
                </button>
            </nav>

            <div id="mobile-menu" className={mobilebtn ? 'active' : ''}>
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu">Destaques</a>
                    </li>
                    <li className="nav-item">
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a href="#avaliar">Avaliação</a>
                    </li>
                </ul>
                <button className="btn-contato">Contato</button>
            </div>
        </header>
    );
}
