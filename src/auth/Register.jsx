import FormRegister from "../components/FormRegister"
import { Row, Col, Button } from 'react-bootstrap';
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";

function Register() {
    const navigate = useNavigate()
    const login = useContext(AuthContext)

    if (login.login) {
        setTimeout(() => { navigate("/products") }, 500);
        return (
            <>
                <Row>
                    <Col className="col-md-6 col-sm-10 mx-auto mt-3 pt-3">
                        <Row className="text-center">
                            <h2>Ya estas logeado</h2>
                            <Link to={"/"}><Button variant="primary">Ir a la tienda</Button></Link>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    } else {
        return (
            <>
                <Row>
                    <Col className="col-md-6 col-sm-10 mx-auto mt-3 pt-3">
                        <Row className="text-center">
                            <h2>Register</h2>
                        </Row>
                        <FormRegister />
                    </Col>
                </Row>
            </>
        )
    }
}
export default Register