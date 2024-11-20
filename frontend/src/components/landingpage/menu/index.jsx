import './index.scss'


export default function Menu(){


    return(


        
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




    )


}