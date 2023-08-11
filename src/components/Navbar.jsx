import { useContext } from 'react';
import { Navbar as NavBootstrap, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const { login, handleLogout, userInfo } = useContext(AuthContext)
    return (
        <>
            <NavBootstrap bg="light" data-bs-theme="light">
                <Container>
                    <NavBootstrap.Brand to="/">KN</NavBootstrap.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Store</Nav.Link>
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
                            <Nav.Link>¡Hola {userInfo.name}!</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </NavBootstrap>
        </>
    )
}

export default Navbar