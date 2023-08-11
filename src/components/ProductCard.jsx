import { useNavigate } from "react-router-dom"
import { deleteProductById } from "../Services/authServices";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, Col, ButtonGroup, Card } from 'react-bootstrap';


function ProductCard({ title, price, thumbnail, id, description, refreshToDelete }) {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/product/${id}`)
    }

    const handleOnClickDelete = () => {
        try {
            deleteProductById(id)
            refreshToDelete()
        } catch (errors) { console.log(errors) }

    }
    const handleOnClickEdit = () => {
        navigate(`/product/edit/${id}`)
    }

    const CUTTING_EXPRESSION = /\s+[^\s]*$/;
    const createShortcut = (text, limit) => {
        if (text.length > limit) {
            const part = text.slice(0, limit - 3);
            if (part.match(CUTTING_EXPRESSION)) {
                  return part.replace(CUTTING_EXPRESSION, ' ...');
            }
            return part + '...';
        }
        return text;
    };

    const descriptionCuted = createShortcut(description, 50);


    return (
        <>
            <Col lg={4} md={6} xs={12} className="mt-3 pt-3">
                <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbnail} onClick={handleOnClick} />
                    <Card.Body>
                        <Card.Title>{title} ${price}</Card.Title>
                        <Card.Text>
                            {descriptionCuted}
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