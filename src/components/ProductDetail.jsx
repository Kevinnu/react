import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Button, Card } from 'react-bootstrap';

function ProductDetail({ title, price, thumbnail, description }) {

    const [buy, setBuy] = useState(false)

    const Buy = () => {
        if (!buy) {
            setBuy(true)
        } else if (buy) {
            setBuy(false)
        }

    }

    if (buy) {
        return (
            <>
                <Col className="col-md-6 col-sm-12 mx-auto mt-3">
                    <Container>
                        <Card>
                            <Card.Header>¡Congratulations!</Card.Header>
                            <Card.Body>
                                <Card.Title>¡Your buying was completed successfully!</Card.Title>
                                <Card.Text>
                                    if you want go back to see the product press de button
                                </Card.Text>
                                <Button variant="primary" onClick={Buy}>Go back</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </>
        )
    } else {
        return (
            <>
                <Col className="col-md-10 col-sm-12 mx-auto mt-3">
                    <Container>
                        <Row>
                            <Col lg={6} md={12} xs={{ order: 1 }}><Image src={thumbnail} fluid /></Col>
                            <Col lg={6} md={12} xs={{ order: 2 }}><h2>{title}</h2>
                                <h4>${price}</h4>
                                <Button variant="primary" onClick={Buy}>Comprar</Button>
                                <br /><br />
                                <Card>
                                    <Card.Body>{description}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </>
        )
    }
}

export default ProductDetail