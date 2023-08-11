import { useNavigate } from "react-router-dom"
import { deleteProductById } from "../Services/authServices";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, Col, ButtonGroup, Card } from 'react-bootstrap';


function ProductCard({ title, price, thumbnail, id, description }) {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/product/${id}`)
    }
    const handleOnClickDelete = () => {
        console.log({ id })
        deleteProductById(id)
        try {
            console.log("eliminado exitosamente")
        } catch (errors) { console.log(errors) }

    }
    const handleOnClickEdit = () => {
        console.log({ id })
        navigate(`/product/edit/${id}`)
    }

    return (
        <>
            <Col lg={4} md={6} xs={12} className="mt-3 pt-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbnail} onClick={handleOnClick} />
                    <Card.Body>
                        <Card.Title>{title} ${price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary" onClick={handleOnClick}>Ver Detalle</Button>
                            {login && (
                                <>
                                    <Button variant="warning" onClick={handleOnClickEdit}>Editar</Button>
                                    <Button variant="danger" onClick={handleOnClickDelete}>Eliminar</Button>
                                </>
                            )}
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ProductCard