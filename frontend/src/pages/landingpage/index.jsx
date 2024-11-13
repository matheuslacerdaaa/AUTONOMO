import './index.scss';
import Cabecalho from '../../components/landingpage/cabecalho';




export default function Landingpage() {




  return (
    <div className="Home">

      <Cabecalho />

      <main>

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


        <section id='menu'>

          <h2 className='section-titulo'>Destaques</h2>
          <h3 className='section-subtitulo'>Os mais pedidos</h3>

          <div id="buguers">
            <div id="buguer">

              <div className="icone">
                <p className='fa-solid fa-heart'></p>
              </div>

              <img src="/assets/images/landingpage/cardapio/buguer1.png" className='buguer-imagem' />

              <h3 className='buguer-titulo'>Cheddar Bacon Bliss</h3>


              <span className='buguer-descricao'>
                Carne, cheddar, bacon e salada de alface, tomate.
              </span>

              <div className="buguer-avaliacao">
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>

              </div>

              <div className="buguer-preco">
                <h4>R$39,99</h4>

                <button className='btn-contato'><a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">Contato</a></button>
              </div>



            </div>

            <div id="buguer">

              <div className="icone">
                <p className='fa-solid fa-heart'></p>
              </div>

              <img src="/assets/images/landingpage/cardapio/buguer2.png" className='buguer-imagem' />

              <h3 className='buguer-titulo'>Cheese Fresh</h3>


              <span className='buguer-descricao'>

                Duas carne, queijo, Bacon, tomate e salada de alface.
              </span>

              <div className="buguer-avaliacao">
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
              </div>

              <div className="buguer-preco">
                <h4>R$29,99</h4>

                <button className='btn-contato'><a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">Contato</a></button>
              </div>



            </div>

            <div id="buguer">

              <div className="icone">
                <p className='fa-solid fa-heart'></p>
              </div>

              <img id='buguer3' src="/assets/images/landingpage/cardapio/buguer3.png" className='buguer-imagem' />

              <h3 className='buguer-titulo'>Fresh Deluxe</h3>


              <span className='buguer-descricao'>
                Carne, queijo, tomate, cebola alface, salada.
              </span>

              <div className="buguer-avaliacao">
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
                <p className='fa-solid fa-star'></p>
              </div>

              <div className="buguer-preco">
                <h4>R$34,99</h4>

                <button className='btn-contato'><a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">Contato</a></button>
              </div>



            </div>


          </div>



        </section>

        <section id='sobre'>


          <div id="mobile">

            <div className="dois">


              <div className="one">
                <h1>Historia</h1>
                <p>Simone sempre foi apaixonado por cozinhar e decidiu criar o hambúrguer perfeito. Assim nasceu a Best's Burguer. No início, foi difícil, mas ele logo percebeu que o segredo estava em usar ingredientes frescos e locais. Seus hambúrgueres criativos, como o de queijo de cabra com geleia de pimenta, conquistaram a galera. Hoje, a Best's Burguer é um ponto de encontro onde amigos se reúnem para compartilhar risadas e saborear hambúrgueres incríveis.</p>
              </div>



              <h1>Sobre Nós</h1>
              <p >Nossa missão é oferecer uma experiência única com hambúrgueres artesanais preparados com ingredientes frescos e de qualidade. Buscamos ser um espaço onde as pessoas possam se reunir, criar memórias e desfrutar de sabores autênticos. Guiados por valores de respeito, excelência e compromisso com o cliente, trabalhamos para que cada refeição seja mais do que uma simples escolha — seja um momento especial</p>
            </div>

          </div>

          <div className="top">



            <div className="esquerda">

              <div className="um">

                <h1 >Historia</h1>
                <p>Simone sempre foi apaixonado por cozinhar e decidiu criar o hambúrguer perfeito. Assim nasceu a Best's Burguer. No início, foi difícil, mas ele logo percebeu que o segredo estava em usar ingredientes frescos e locais. Seus hambúrgueres criativos, como o de queijo de cabra com geleia de pimenta, conquistaram a galera. Hoje, a Best's Burguer é um ponto de encontro onde amigos se reúnem para compartilhar risadas e saborear hambúrgueres incríveis.</p>
              </div>



            </div>



            <div className="direita-topo">

              <div className="preto">

                <img src="/assets/images/landingpage/sobre/sobre1.jpg" className='img-sobre' alt="" />

              </div>
            </div>




          </div>



          <div className="top">




            <div className="direita">

              <div className="preto">

                <img src="/assets/images/landingpage/sobre/sobrenos.avif" className='img-sobre' alt="" />

              </div>
            </div>


            <div className="esquerda">

              <div className="um">

                <h1 >Sobre Nós</h1>
                <p>Nossa missão é oferecer uma experiência única com hambúrgueres artesanais preparados com ingredientes frescos e de qualidade. Buscamos ser um espaço onde as pessoas possam se reunir, criar memórias e desfrutar de sabores autênticos. Guiados por valores de respeito, excelência e compromisso com o cliente, trabalhamos para que cada refeição seja mais do que uma simples escolha — seja um momento especial.</p>
              </div>



            </div>

          </div>


        </section>

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
                    Matheus Lacerda
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


      </main>

      <footer>

        <img src="/assets/images/landingpage/footer/wave.svg" />

        <div id="footer_item">

          <span id="copyright">
            &copy 2024 Sky Blue
          </span>

          <div id="icones">
            <a href="https://www.instagram.com/_bestburgers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <p className='fa-brands fa-instagram'></p> </a>
            <a href="https://wa.me/5511947096884?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.
              "> <p className='fa-brands fa-whatsapp'></p> </a>
            <a href="https://www.facebook.com/lanchesda.BestBurguer?locale=pt_BR"> <p className='fa-brands fa-facebook'></p> </a>
          </div>
        </div>


      </footer>




    </div>
  );
}
