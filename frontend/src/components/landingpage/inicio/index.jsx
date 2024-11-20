import './index.scss'


export default function Inicio() {

    return (

        <section id='inicio'>
            <div className="borda"></div>

            <div className="cta">
                <h1 className="titulo">
                    O sabor é o nosso ingrediente <span>secreto!</span>
                </h1>
                <p className='subtitulo'>Mordidas recheadas de amor, sabor e uma história por trás de cada prato que preparamos com carinho!</p>
                <div className="cta-botao">
                    <a href="#menu" className='btn-contato'>Destaque</a>
                </div>
                <div id="icones">
                    <a href="https://www.instagram.com/_bestburgers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <p className='fa-brands fa-instagram'></p> </a>
                    <a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.
            "> <p className='fa-brands fa-whatsapp'></p> </a>
                    <a href="https://www.facebook.com/lanchesda.BestBurguer?locale=pt_BR"> <p className='fa-brands fa-facebook'></p> </a>
                </div>
            </div>
            <div id="banner">
                <img src="/assets/images/landingpage/home/home.png" />
            </div>
        </section>



    )



}