import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

function NavBarra() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`fixed-top transparencia ${scroll ? 'scroll-navbar' : 'cor_bg_navbar'}`}>
      <Navbar.Brand className={`margin_nav ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/">Lavu Ateliê</Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className={`margin_right navbar-toggler ${scroll ? 'scroll-toggler' : ''}`} 
        aria-label="Toggle navigation" 
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-lg-end justify-center-lg ">
        <Nav className="me-auto marginVW margin_right ">
          <Nav.Link className={`margin ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/">Home</Nav.Link>
          <Nav.Link className={`margin ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/Sobre">Sobre</Nav.Link>
          <Nav.Link className={`margin ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/Figurinos">Figurinos</Nav.Link>
          <Nav.Link className={`margin ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/Festas">Noivas/Festas</Nav.Link>
          <Nav.Link className={`margin ${scroll ? 'scroll-text' : 'cor_tx_navbar'}`} href="/Autorais">Autorais</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarra;