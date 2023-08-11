import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="col-md-6 col-sm-10 mx-auto mt-3 pt-3 text-center">
                        <h1>¡Welcome to the best web page on the world!</h1>
                        <Link to="/products"><Button variant="primary">¡Go to store!</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage