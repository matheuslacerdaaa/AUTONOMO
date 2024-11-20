import './index.scss'



export default function Avaliar() {


    return (

        <section id='avaliar'>

            <img src="/assets/images/landingpage/avaliacao/chef.png" id='avaliar_chef' />


            <div id="avaliar_conteudo">

                <h2 className='section-titulo'>Depoimentos</h2>
                <h3 className='section-subtitulo'>O que os clientes falam sobre nós</h3>

                <div id="feedbecks">

                    <div className="feedbeck">

                        <img src="/assets/images/landingpage/avaliacao/perfil.png" className='feedback-perfil' />

                        <div className="feedback-conteudo">

                            <p className='nome'>
                                Henrique Cascais
                                <span>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                </span>
                            </p>

                            <p className='um'>Lugar incrível com hambúrgueres com um ambiente acolhedor.</p>
                        </div>

                    </div>

                    <div className="feedbeck">
                        <img src="/assets/images/landingpage/avaliacao/perfil.png" className='feedback-perfil' />
                        <div className="feedback-conteudo">
                            <p className='nome'>
                                Rafael Andrade
                                <span>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                </span>
                            </p>
                            <p className='dois'>
                                Tudo excelente, adorei o atendimento e, principalmente, o hambúrguer!</p>
                        </div>
                    </div>

                </div>



            </div>

        </section>


    )


}