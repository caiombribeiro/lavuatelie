// Head.js
import React from 'react';
import "./DescricaoPr.css"; // ou outro arquivo CSS necessário

function Head({ tipo_fade, head, cor }) {
    return (
        <div data-aos={tipo_fade} className={'size_descr ' + cor}>
            <h1 className='margin_descr'>{head}</h1>
        </div>
    );
}

export default Head;
