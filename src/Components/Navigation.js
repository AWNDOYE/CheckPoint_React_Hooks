
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Navigation() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
}
    return (
      <Navbar expand="lg" className="bg-body-tertiary" style={{margin:'10px 40px 5px 35px', borderRadius:'15px'}}>
        <Container>
          <Navbar.Brand onClick={goBack}>Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link onClick={goBack}>Acceuil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Navigation