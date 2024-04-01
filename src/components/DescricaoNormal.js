import React, { useEffect } from 'react';
import "./DescricaoPr.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

function DescricaoNormal({tipo_fade, head, texto, cor}) {
    useEffect(() => {
        AOS.init({
            duration: 1000 // duração da animação em milissegundos
        });
    }, []);

    const renderText = () => {
        // Verifica se o texto contém tags HTML
        if (/<[a-z][\s\S]*>/i.test(texto)) {
            // Se o texto contém tags HTML, usa dangerouslySetInnerHTML
            return <p className='margin_descr' dangerouslySetInnerHTML={{ __html: texto }}></p>;
        } else {
            // Caso contrário, renderiza o texto normalmente
            return <p className='margin_descr'>{texto}</p>;
        }
    };

    return (
        <div data-aos={tipo_fade} className={'size_descr ' + cor}>
            <h1 className='margin_descr'>{head}</h1>
            {renderText()}
        </div>
    )
}

export default DescricaoNormal