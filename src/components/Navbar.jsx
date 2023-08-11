import { useContext } from 'react';
import { Navbar as NavBootstrap, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const { login, handleLogout, userInfo } = useContext(AuthContext)
    return (
        <>  
            <NavBootstrap collapseOnSelect expand="md" className="bg-body-tertiary">
                <Container>
                    <NavBootstrap.Brand to="/">KN</NavBootstrap.Brand>
                    <NavBootstrap.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBootstrap.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Tienda</Nav.Link>
                            {login && (
                                <>
                                    <Nav.Link as={Link} to="/upProduct">Update</Nav.Link>
                                    <Nav.Link onClick={() => { handleLogout() }}>Salir</Nav.Link>
                                </>
                            )}
                            {!login && (
                                <>
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                            )}
                            <Nav.Link as={Link} to="/notFound">Not Found</Nav.Link>
                            {login && (
                                <>
                                    <Nav.Link as={Link} to="/user">¡Hola {userInfo.name}!</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </NavBootstrap.Collapse>
                </Container>
            </NavBootstrap>
        </>
    )
}

export default Navbar