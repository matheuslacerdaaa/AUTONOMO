import './index.scss';
import Cabecalho from '../../components/landingpage/cabecalho';
import Inicio from '../../components/landingpage/inicio';
import Menu from '../../components/landingpage/menu';
import Sobre from '../../components/landingpage/sobre';
import Avaliar from '../../components/landingpage/avaliar';
import Footer from '../../components/landingpage/footer';

export default function Landingpage() {




  return (
    <div className="Home">

      <Cabecalho />

      <main>


        

        <Inicio/>
        <Menu/>
        <Sobre/>
        <Avaliar/>
      </main>

      <Footer/>




    </div>
  );
}
