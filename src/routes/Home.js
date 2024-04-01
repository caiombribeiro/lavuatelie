
import '../Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarra from "../components/NavBar"
import Footeer from '../components/footeer';
import BlocoPr from '../components/BlocoPr';



function Home() {
  return (
    <div className="App">
      <NavBarra />
      
      <section className='faixap degrade1 fleex'>
        <h1 className='size_h1'>Lavu Ateliê</h1>
      </section>

      <BlocoPr
        cor={"black"}
        ordenamento={2}
        refer={"/Figurinos"}
        texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        head={"Figurinos"}
        imagem={"https://i.pinimg.com/564x/3f/2b/c7/3f2bc79f33da65a5f4a6738a8a4a8f32.jpg"}
        bg_c={"degrade2"}
      />

      <BlocoPr
        cor={"black"}
        ordenamento={1}
        refer={"/Festas"}
        texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        head={"Noivas & Festas"}
        imagem={"https://i.pinimg.com/564x/3f/2b/c7/3f2bc79f33da65a5f4a6738a8a4a8f32.jpg"}
        bg_c={"degrade3"}
      />

      <BlocoPr
        cor={"whiteR"}
        ordenamento={2}
        refer={"/Autorais"}
        texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        head={"Autorais"}
        imagem={"https://i.pinimg.com/564x/3f/2b/c7/3f2bc79f33da65a5f4a6738a8a4a8f32.jpg"}
        bg_c={"degrade4"}
      />
      <Footeer />
    </div>
  );
}

export default Home;