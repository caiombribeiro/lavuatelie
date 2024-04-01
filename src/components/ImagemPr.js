import React, { useEffect } from 'react';
import "./ImagemPr.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


function ImagemPr({ imagem, tipo_fade }) {
    useEffect(() => {
        AOS.init({
            duration: 1000 // duração da animação em milissegundos
        });
    }, []);

    return (
        <div className='teste' data-aos={tipo_fade}>
        
            <img src={imagem} alt="teste" className='size_image' />
        </div>
    )
}

export default ImagemPr