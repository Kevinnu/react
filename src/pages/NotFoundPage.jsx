import { Col, Container, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <>
            <Col sm={10} lg={6} className="mx-auto mt-3 text-center">
                <Container>
                    <Card>
                        <Card.Header>¡UPS!</Card.Header>
                        <Card.Body>
                            <Card.Title>No puedes acceder a esta pagina</Card.Title>
                            <Card.Text>
                                Presiona el botón para ir a la tienda
                            </Card.Text>
                            <Button variant="primary" as={Link} to={'/products'}>Volver a la tienda</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
        </>
    )
}

export default NotFoundPage