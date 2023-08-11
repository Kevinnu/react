import { useForm } from "react-hook-form"
import { editProductById, getProductByIdFirebase } from "../Services/authServices"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AlertMsg from "./AlertMsg";
import Input from "./Input";
import ButtonWithLoading from "./ButtonWithLoading";
import { Container, Row, Col, Spinner } from 'react-bootstrap';


function FormEditProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState({ variant: '', text: '', duration: 0, path: '' })

    useEffect(() => {
        const request = async () => {
            try {
                const data = await getProductByIdFirebase(id)
                setProduct(data.data())
                setLoading(false)
            } catch (errors) { console.log(errors) }

        }
        request()
    }, [])

    const handleOnChange = (e) => {
        const name = e?.target?.name
        const value = e?.target?.value
        setProduct({ ...product, [name]: value })
    }


    const onSubmit = async (data) => {
        try {
            const response = await editProductById(data)
            setAlert({ variant: 'success', text: 'Producto modificado exitosamente', duration: 1000, path: `/product/${id}` })
        } catch (e) {
            console.log("Error:", e)
            setAlert({ variant: 'danger', text: registroMessage[e.code] || "Ha ocurrido un error", duration: 0 })
        }

    }

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
                <form className="Form" onSubmit={handleSubmit(onSubmit)}>

                    <input hidden {...register("id", { value: id })} />

                    <Input
                        label={"Titulo"}
                        name={"title"}
                        type={"text"}
                        placeholder={"Ingrese un titulo"}
                        register={{ ...register("title", { required: true, value: product?.title, onChange: handleOnChange }) }}
                        errors={errors} />

                    <Input
                        label={"Precio"}
                        name={"price"}
                        type={"number"}
                        placeholder={"Ingrese precio"}
                        register={{ ...register("price", { required: true, value: product?.price, onChange: handleOnChange }) }}
                        errors={errors} />

                    <Input
                        label={"Descripcion"}
                        name={"descripcion"}
                        type={"text"}
                        placeholder={"Descripcion..."}
                        register={{ ...register("description", { required: true, value: product?.description, maxLength: 2000 }) }}
                        errors={errors} />

                    <Input
                        label={"Imagen"}
                        name={"thumbnail"}
                        type={"text"}
                        placeholder={"Ingrese url imagen"}
                        register={{ ...register("thumbnail", { required: true, value: product?.thumbnail, onChange: handleOnChange }) }}
                        errors={errors} />

                    <ButtonWithLoading variant="primary" type="submit" loading={loading}>Actualizar</ButtonWithLoading>
                </form>
                <AlertMsg {...alert} />
            </>
        )
    }
}

export default FormEditProduct