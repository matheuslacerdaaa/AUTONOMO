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
                <p id='logo'>BURGUERS</p>
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
                <a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.
                " className='btn-contato' >Contato</a>
                <button id="mobile-btn" onClick={abrirmenu}>
                    <p className={`fa-solid ${icones}`}></p>
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
                <a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.
                " className='btn-contato'>Contato</a>
            </div>
        </header>
    );
}
