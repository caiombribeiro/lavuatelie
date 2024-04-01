import React, { useEffect } from 'react';
import "./DescricaoPr.css"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';

function DescricaoPr({tipo_fade, head, texto, cor, refer}) {
    useEffect(() => {
        AOS.init({
            duration: 1000 // duração da animação em milissegundos
        });
    }, []);
    return (
        <div data-aos={tipo_fade} className={'size_descr ' + cor}>
            <h1 className='margin_descr'>{head}</h1>
            <p className='margin_descr'>{texto}</p>
            <Link to={refer}>
            <Button className="bg_botao padding_descr" as="input" type="button" value="Saiba Mais" />{' '}
            </Link>
        </div>
    )
}

export default DescricaoPr