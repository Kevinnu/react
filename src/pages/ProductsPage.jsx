import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getAllFirebase } from '../Services/authServices'
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function ProductsPage() {
    const [loading, setLoading] = useState(true)
    const [productFirebase, setProductFirebase] = useState([])
    const [refresh, setRefresh] = useState(false)

    const refreshToDelete = () => {
        if (refresh) {
            setRefresh(false)
        } else {
            setRefresh(true)
        }
    }

    useEffect(() => {
        const request = async () => {
            try {
                const data = await getAllFirebase()
                setProductFirebase(data.docs)
                setLoading(false)
            } catch (errors) { console.log(errors) }
        }
        request()
    }, [refresh])


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
    } else {
        return (
            <>
                <Container>
                    <Row>
                        {productFirebase.map(product =>
                            <ProductCard
                                refreshToDelete={refreshToDelete}
                                key={product.id}
                                {...product.data()}
                                id={product.id} />)
                        }
                    </Row>
                </Container>

                <div className='Grid'>

                </div>
            </>
        )
    }
}

export default ProductsPage