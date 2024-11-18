import "./ajuda.scss";
import Left from "../../../../../components/adm/left";

export default function Ajuda() {




  return (
    <div className="mae">

      <div className="esquerda">

        <Left />

      </div>


      <div className="direita">


        <header>
          <h1>Ajuda</h1>
        </header>


        <div className="main">

          <div className="conteudo">

            <div className="titulo"><h2>Principais Perguntas</h2></div>

            <div className="um">

              <div className="text-field">
                <h1>Posso devolver ou trocar um produto?</h1>

                <p>Após a confirmação do envio, você receberá um código de rastreamento por e-mail, que pode ser utilizado no site da transportadora.</p>
              </div>
            </div>
            <div className="dois">

              <div className="text-field">
                <h1>Como posso entrar em contato?</h1>

                <p>Você pode nos contatar por e-mail, telefone ou através do chat ao vivo disponível no nosso site.</p>
              </div>
            </div>
            <div className="tres">

              <div className="text-field">
                <h1>Vocês oferecem suporte técnico?</h1>

                <p>Sim, oferecemos suporte técnico para nossos produtos. Você pode entrar em contato com nossa equipe de suporte para assistência.</p>
              </div>
            </div>


          </div>


        </div>



      </div>








    </div>
  );
}

