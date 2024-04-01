
import React from 'react';
import NavBarra from "../components/NavBar.js";
import Footeer from '../components/footeer.js';
import BlocoPr from '../components/BlocoPr.js';
import "../Global.css"



function Sobre() {
  return (
    <div>
      <NavBarra />
      <BlocoPr 
      cor={"black"} 
      ordenamento={1} 
      refer={"/Autorais"} 
      texto={"SASMASJIAHJSIJAISJAIJS IAJSIJSIJAISJIAJSIAJS asasasas asdgszdg"} 
      head={"Testandoppppppp"} 
      imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRK5VoKv_ZCnY5W_58ZkrIDRMQsUaeK_j6d2BRr6dBzLrlqI6TzEYEcYaP2b38s0Jiepg&usqp=CAU"}
      bg_c ={"degrade1"}
      />
      
      <section className='faixa'>

      </section>

      <Footeer />
    </div>
  );
}

export default Sobre;
