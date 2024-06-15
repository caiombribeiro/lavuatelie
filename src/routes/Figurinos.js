// Figurinos.js
import React from 'react';
import NavBarra from "../components/NavBar.js";
import Footeer from '../components/footeer.js';
import Galeria from '../components/Galeria.js';

function Figurinos() {
  return (
    <div>
      <NavBarra />
      {/* <div className='redbackground mg_top70 fleexcolumn faixaHead'>
        <HeadPr
          tipo_fade={"fade-right"}
          head={"Figurinos"}
          cor={"whiteR"}
        />

      </div> */}
      <section className='faixaHead blackbackground fleexPainel mg_top70' >
        <h1 className='size_h2White'>Figurinos</h1>
      </section>

      <Galeria />

      <Footeer />
    </div>
  );
}

export default Figurinos;
