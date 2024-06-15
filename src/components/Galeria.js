import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './Galeria.css';

const teste = "https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg"

const images = [
  { src: teste, alt: 'Imagem 1' },
  { src: teste, alt: 'Imagem 2' },
  { src: teste, alt: 'Imagem 3' },
  { src: teste, alt: 'Imagem 3' },
  { src: teste, alt: 'Imagem 3' },
  { src: teste, alt: 'Imagem 3' },
  // Adicione mais imagens conforme necessário
];

const Galeria = () => {
  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggle = () => setModal(!modal);

  const openModal = (image) => {
    setCurrentImage(image);
    toggle();
  };

  return (
    <div className="gallery box">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="gallery-item"
          onClick={() => openModal(image)}
        />
      ))}

      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalBody>
          {currentImage && <img src={currentImage.src} alt={currentImage.alt} className="modal-image" />}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Galeria;