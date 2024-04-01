
import React from 'react';
import NavBarra from "../components/NavBar.js";
import Footeer from '../components/footeer.js';
import "../Global.css"
import BlocoNormal from '../components/BlocoNormal.js';
import flavia from '../images/flavia.jpeg'
import atelie from '../images/atelie2.jpeg'


function Sobre() {
  return (
    <div>
      <NavBarra />

      <BlocoNormal
        cor={"black"}
        ordenamento={2}
        head={"Sobre o Ateliê"}
        texto={"Fundado em 2023, nasceu do sonho de empreender e democratizar a moda, abraçando todos os padrões. <br></br> Aqui, cada peça é mais que uma simples criação; é a expressão do individuo com estilo e de forma autêntica.<br></br>Nossa missão é inspirar confiança e beleza em cada cliente que atravessa nossas portas."}
        imagem={atelie}
        classe={"faixam fleex bg5 mg_oculta"}
      />
      <BlocoNormal
        cor={"black"}
        ordenamento={1}
        head={"Sobre a Estilista"}
        texto={"A Flavia Marques é entusiasta por moda desde criança. Começou sua jornada costurando roupas para suas bonecas, despertando sua criatividade e paixão pelo universo da moda.<br><br/>Com o tempo, encontrou-se no mundo da alta costura, onde a magia de transformar tecidos em peças elegantes e únicas a conquistou por completo.<br><br/>Atualmente, a Flavia não só cria designs exclusivos, mas também modela, costura e administra a Lavu, trazendo toda sua dedicação e talento em cada uma das peças."}
        imagem={flavia}
        classe={"faixam fleex bg1"}
      />
      <Footeer />
    </div>
  );
}

export default Sobre;
