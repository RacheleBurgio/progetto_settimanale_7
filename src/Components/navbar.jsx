import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { PersonCircle } from 'react-bootstrap-icons'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark w-100">
      <Navbar.Brand href="#home" className="ms-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          width="100"
          height="auto"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tv-shows">Serie TV</Nav.Link>
          <Nav.Link href="#movies">Film</Nav.Link>
          <Nav.Link href="#new-popular">Nuovi e Popolari</Nav.Link>
          <Nav.Link href="#my-list">La Mia Lista</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center">
          <img
            src="https://www.techstation.it/wp-content/uploads/2018/07/icone-del-profilo-di-Netflix-8.jpg"
            style={{ width: '50px', height: '50px' }}
          />
        </div>

        <Nav className="me-3">
          <NavDropdown id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="#profile">Profilo</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Impostazioni</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
