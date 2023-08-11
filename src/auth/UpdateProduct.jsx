import FormUpdateProduct from '../components/FormUpdateProduct';
import { Row, Col } from 'react-bootstrap';

function UpdateProduct() {
    return (
        <>
            <Row>
                <Col className="col-md-6 col-sm-10 mx-auto mt-3 pt-3">
                    <Row className="text-center">
                        <h2>Alta de Producto</h2>
                    </Row>
                    <FormUpdateProduct />
                </Col>
            </Row>
        </>
    )
}

export default UpdateProduct