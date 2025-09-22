import "./style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} height={80} alt="Own_Design" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" className='nav-items'>About Us</Nav.Link>
                        <Nav.Link href="#investment-focus" className='nav-items'>Investment Focus</Nav.Link>
                        <Nav.Link href="#contact-us" className='nav-items'>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;