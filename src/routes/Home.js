
import '../Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarra from "../components/NavBar"
import Footeer from '../components/footeer';
import BlocoPr from '../components/BlocoPr';

import fig1 from '../images/figurinos/figurino1.jpg'



function Home() {
  return (
    <div className="App">
      <NavBarra />
      
      <section className='faixap whitebackground fleexPainel'>
        <h1 className='size_h1'>Lavu Ateliê</h1>
      </section>

      <BlocoPr
        cor={"whiteR"}
        ordenamento={2}
        refer={"/Figurinos"}
        texto={"Fazemos figurinos para peças, apresentações, exposições, ações e eventos. Venha conferir!"}
        head={"Figurinos"}
        imagem={fig1}
        bg_c={"blackbackground"}
      />

      <BlocoPr
        cor={"black"}
        ordenamento={1}
        refer={"/Festas"}
        texto={"Confecção de vestidos para Noivas e festas no geral sob medida!"}
        head={"Noivas & Festas"}
        imagem={"https://media.vogue.in/wp-content/uploads/2022/08/289442309_369845058574566_8126628707473336304_n.jpg"}
        bg_c={"whitebackground"}
      />

      <BlocoPr
        cor={"whiteR"}
        ordenamento={2}
        refer={"/Autorais"}
        texto={"Vestimentas feitas com base em modelagens únicas e exclusivas!"}
        head={"Autorais"}
        imagem={"https://s2-marieclaire.glbimg.com/PZABvH9WiMk40ctLRXu38RoJozs=/0x0:1200x1600/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2022/e/8/6gsCGwSDu9CByruRs8RQ/2022-10-31-2022.jpeg"}
        bg_c={"blackbackground"}
      />
      <Footeer />
    </div>
  );
}

export default Home;