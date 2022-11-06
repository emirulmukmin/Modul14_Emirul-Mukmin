import './main.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import './main.css'

function Header(){
    return (
        <>
        {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="header" sticky="top">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" style={{fontSize:"24px", color:"white"}}>Netlab Bookstore</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Netlab Bookstore
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{fontSize:"18px"}}>
                  <Nav.Link as={Link} to="/" style={{color:"white"}}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" style={{color:"white"}}>About</Nav.Link>
                  <Nav.Link as={Link} to="/contact" style={{color:"white"}}>Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search by ISBN13"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    )
}

export default Header;