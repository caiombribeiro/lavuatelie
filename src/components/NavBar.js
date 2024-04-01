
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

function NavBarra() {
  return (
    <Navbar expand="lg" className="cor_bg_navbar fixed-top transparencia" >
      <Navbar.Brand className="cor_tx_navbar margin_nav" href="/">Lavu Ateliê</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='margin_right' />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-lg-end justify-center-lg ">
        <Nav className="me-auto marginVW margin_right ">
          <Nav.Link className="cor_tx_navbar margin" href="/">Home</Nav.Link>
          <Nav.Link className="cor_tx_navbar margin" href="/Sobre">Sobre</Nav.Link>
          <Nav.Link className="cor_tx_navbar margin" href="/Figurinos">Figurinos</Nav.Link>
          <Nav.Link className="cor_tx_navbar margin" href="/Festas">Noivas/Festas</Nav.Link>
          <Nav.Link className="cor_tx_navbar margin" href="/Autorais">Autorais</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarra;