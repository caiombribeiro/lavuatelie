import '../Global.css';
import DescricaoNormal from './DescricaoNormal';
import ImagemPr from './ImagemPr';

import { useMediaQuery } from 'react-responsive';

function BlocoNormal({cor, refer, texto, head, imagem, ordenamento, classe}) {
    // Determinar a classe CSS com base na ordem
    let classeDivisaoDescricao, classeDivisaoImagem, tipo_fade_d, tipo_fade_i;
    const isMobile = useMediaQuery({ query: '(max-width: 991px)' });


    // Se o ordenamento for 1, defina a ordem do descrição como 1 e da imagem como 2
    if(isMobile){
        classeDivisaoDescricao = 'divisao-ordem-2';
        classeDivisaoImagem = 'divisao-ordem-1';
        tipo_fade_d = "fade-left";
        tipo_fade_i = "fade-right";
    }

    else if(ordenamento === 1) {
        classeDivisaoDescricao = 'divisao-ordem-1';
        classeDivisaoImagem = 'divisao-ordem-2';
        tipo_fade_d = "fade-right";
        tipo_fade_i = "fade-left";

    } else {
        // Se o ordenamento não for 1, defina a ordem do descrição como 2 e da imagem como 1
        classeDivisaoDescricao = 'divisao-ordem-2';
        classeDivisaoImagem = 'divisao-ordem-1';
        tipo_fade_d = "fade-left";
        tipo_fade_i = "fade-right";
    }

    return (
        <section className={`${classe}`}>
            <div className={`divisao ${classeDivisaoDescricao}`}>
                <DescricaoNormal
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
    );
}

export default BlocoNormal;