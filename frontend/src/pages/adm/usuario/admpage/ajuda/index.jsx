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
                <h1>Como a plataforma funciona?</h1>

                <p>Você insere os dados financeiros da sua empresa, e nossa ferramenta organiza, analisa e fornece graficos para melhorar a gestão financeira.</p>
              </div>
            </div>
            <div className="dois">

              <div className="text-field">
                <h1>Como posso entrar em contato?</h1>

                <p>Você pode nos contatar por e-mail, telefone ou através do whatsapp.</p>
              </div>
            </div>
            <div className="tres">

              <div className="text-field">
                <h1>Vocês oferecem suporte técnico?</h1>

                <p>Sim, nossos especialistas estão prontos para ajudar com dúvidas específicas sobre sua gestão financeira.</p>
              </div>
            </div>


          </div>


        </div>



      </div>








    </div>
  );
}

