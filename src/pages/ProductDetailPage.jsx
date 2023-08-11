import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductDetail from "../components/ProductDetail";
import { getProductByIdFirebase } from "../Services/authServices";
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function ProductDetailPage() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const request = async () => {
            try {
                const data = await getProductByIdFirebase(id)
                setProductDetail(data.data())
                setLoading(false)
            } catch (errors) { console.log(errors) }

        }
        request()
    }, [])

    if (loading) {
        return (
        <Container>
                <Row>
                    <Col lg={4} md={6} xs={12} className='mx-auto text-center mt-3 pt-3'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        )
    } else if (error) {
        return (<h2>El producto no existe</h2>)
    } else {
        return (
            <div>
                <ProductDetail {...productDetail}/>
            </div>
        )
    }
}

export default ProductDetailPage