import FormEditProduct from '../components/FormEditProduct';
import { Row, Col } from 'react-bootstrap';

function EditProduct() {
    return (
        <>
            <Row>
                <Col className="col-md-6 col-sm-10 mx-auto mt-3 pt-3">
                    <Row className="text-center">
                        <h2>Edit product</h2>
                    </Row>
                    <FormEditProduct />
                </Col>
            </Row>
        </>
    )
}

export default EditProduct