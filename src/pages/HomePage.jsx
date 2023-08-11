import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} className="mx-auto mt-3 pt-3 text-center">
                        <h1>¡Bienvenido/a a la tienda virtual!</h1>
                        <Button variant="primary" as={Link} to="/products">¡Ir a la tienda!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage