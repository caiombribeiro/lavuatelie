import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DescricaoNormal from './DescricaoNormal';
import DescricaoHeadNormal from './DescricaoHeadNormal.js';
import ImagemPr from './ImagemPr';
import HeadNormal from './HeadNormal.js';
import '../Global.css';

function BlocoNormal({ cor, refer, texto, head, imagem, ordenamento, classe }) {
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
                    <section className={`${classe}`}>
                        <div className={`divisao ${classeDivisaoHead}`}>
                            <DescricaoHeadNormal
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

                    <section className={`${classe} flex-container`}>

                        <div className={`divisao ${classeDivisaoHead}`}>
                            <HeadNormal
                                tipo_fade={tipo_fade_h}
                                head={head}
                                cor={cor}
                            />
                        </div>
                        <div className={`divisao ${classeDivisaoDescricao}`}>
                            <DescricaoNormal
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

export default BlocoNormal;