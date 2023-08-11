import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { registerFirebase } from "../Services/authServices"
import { registroMessage } from "../Utils/ErrorsMessages";
import AlertMsg from "./AlertMsg";
import ButtonWithLoading from "./ButtonWithLoading";
import Input from "./Input";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom"

function FormRegister() {

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({ variant: '', text: '', duration: 0, path: '' })
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log("handleSubmit", data)
            const response = await registerFirebase(data)
            console.log("response", response)
            setAlert({ variant: 'success', text: 'Nuevo usuarios registrado con exito', duration: 2000, path: '/login' })

        } catch (e) {
            console.log("Error", e)
            setAlert({ variant: 'danger', text: registroMessage[e.code] || "Ha ocurrido un error", duration: 0 })
            setLoading(false)
        }

    }

    const login = useContext(AuthContext)

    if (login.login) {
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
                <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label={"Nombre"}
                        name={"name"}
                        type={"text"}
                        placeholder={"Ingrese su Nombre"}
                        register={{ ...register("name", { required: true }) }}
                        errors={errors} />

                    <Input
                        label={"Apellido"}
                        name={"lastname"}
                        type={"text"}
                        placeholder={"Ingrese su Apellido"}
                        register={{ ...register("lastname", { required: true }) }}
                        errors={errors} />

                    <Input
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"Ingrese su Email"}
                        register={{ ...register("email", { required: true }) }}
                        errors={errors} />

                    <Input
                        label={"Contraseña"}
                        name={"password"}
                        type={"password"}
                        placeholder={"Ingrese su Contraseña"}
                        register={{ ...register("password", { required: true, minLength: 6 }) }}
                        errors={errors} >
                        <Form.Text className='text-muted'>
                            {errors.password?.type === 'minLength' && <div>Al menos 6 caracteres</div>}
                        </Form.Text>
                    </Input>

                    <ButtonWithLoading variant="primary" type="submit" loading={loading}>Registrarme</ButtonWithLoading>
                </form>
                <AlertMsg {...alert} />
            </>
        )
    }
}

export default FormRegister