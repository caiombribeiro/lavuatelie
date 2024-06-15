import React from 'react';

import '../Global.css';
import DescricaoPr from './DescricaoPr';
import ImagemPr from './ImagemPr';
import HeadPr from './HeadPr.js';
import DescricaoHeadPr from './DescricaoHeadPr.js';

import { useMediaQuery } from 'react-responsive';

function BlocoPr({ cor, refer, texto, head, imagem, ordenamento, classe, bg_c }) {
    const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

    let classeDivisaoDescricao, classeDivisaoImagem, classeDivisaoHead, tipo_fade_d, tipo_fade_i, tipo_fade_h;

    if (isMobile) {
        // Ajustar a ordem dos elementos para mobile
        classeDivisaoHead = 'divisao-ordem-1';
        classeDivisaoImagem = 'divisao-ordem-2';
        classeDivisaoDescricao = 'divisao-ordem-3';
        tipo_fade_h = "fade-left";
        tipo_fade_i = "fade-right";
        tipo_fade_d = "fade-left";
    } else if (ordenamento === 1) {
        classeDivisaoHead = 'divisao-ordem-1';
        classeDivisaoImagem = 'divisao-ordem-2';
        tipo_fade_h = "fade-right";
        tipo_fade_i = "fade-right";
        tipo_fade_d = "fade-left";
    } else {
        classeDivisaoHead = 'divisao-ordem-2';
        classeDivisaoImagem = 'divisao-ordem-1';
        tipo_fade_h = "fade-left";
        tipo_fade_i = "fade-left";
        tipo_fade_d = "fade-right";
    }

    return (
        <>
            {
                window.innerWidth > 992 ? (
                    <section className={`${classe} ${bg_c}`}>
                        <div className={`divisao ${classeDivisaoHead}`}>
                            <DescricaoHeadPr
                                tipo_fade={tipo_fade_d}
                                head={head}
                                cor={cor}
                                refer={refer}
                                texto={texto}
                            />
                        </div>
                        <div className={`divisao ${classeDivisaoImagem}`}>
                            <ImagemPr
                                imagem={imagem}
                                tipo_fade={tipo_fade_i}
                            />
                        </div>
                    </section>
                ) : (

                    <section className={`${classe} ${bg_c} flex-container`}>

                        <div className={`divisao ${classeDivisaoHead}`}>
                            <HeadPr
                                tipo_fade={tipo_fade_h}
                                head={head}
                                cor={cor}
                            />
                        </div>
                        <div className={`divisao ${classeDivisaoDescricao}`}>
                            <DescricaoPr
                                tipo_fade={tipo_fade_d}
                                texto={texto}
                                cor={cor}
                                refer={refer}
                            />
                        </div>


                        <div className={`divisao ${classeDivisaoImagem}`}>
                            <ImagemPr
                                imagem={imagem}
                                tipo_fade={tipo_fade_i}
                            />
                        </div>

                    </section>)

            }

        </>

    );
}

export default BlocoPr;