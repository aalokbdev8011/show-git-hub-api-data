import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container className='mx-2'>
                <Navbar.Brand className='text-white' href="#home">Git-Hub-Search-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='text-white text-decoration-none' to="/" >Search Page</Link></Nav.Link>
                        <Nav.Link><Link className='text-white text-decoration-none' to="/history">History</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar