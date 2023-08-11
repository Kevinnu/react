import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { logIn } from "../Services/authServices"
import { registroMessage } from "../Utils/ErrorsMessages";
import Input from "./Input";
import ButtonWithLoading from "./ButtonWithLoading";
import AlertMsg from "./AlertMsg";
import { AuthContext } from "../Context/AuthContext";



function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({ variant: '', text: '', duration: 0, path: '' })
    const context = useContext(AuthContext)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await logIn(data)
            context.handleLogin(response)
            setAlert({ variant: 'success', text: `Bienvenido/a ${response?.name}`, duration: 10, path: '/products' })
        } catch (e) {
            console.log("Error", e)
            setAlert({ variant: 'danger', text: registroMessage[e.code] || "Ha ocurrido un error", duration: 10 })
            setLoading(false)
        }

    }

    return (
        <>
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
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
                    register={{ ...register("password", { required: true }) }}
                    errors={errors} />

                <ButtonWithLoading variant="primary" type="submit" loading={loading}>Ingresar</ButtonWithLoading>
                <AlertMsg {...alert} />
            </form>
        </>
    )
}

export default FormLogin