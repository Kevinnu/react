import { useForm } from "react-hook-form"
import { upProduct } from "../Services/authServices"
import { registroMessage } from "../Utils/ErrorsMessages";
import AlertMsg from "./AlertMsg";
import ButtonWithLoading from "./ButtonWithLoading";
import { useContext, useState } from "react";
import Input from "./Input";
import { AuthContext } from "../Context/AuthContext";

function FormUpdateProduct() {
    const userId = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [alert, setAlert] = useState({ variant: '', text: '', duration: 0, path: '' })

    const onSubmit = async (data) => {
        try {
            const response = await upProduct(data)
            setAlert({ variant: 'success', text: '¡Producto registrado exitosamente!', duration: 500, path: '' })
        } catch (e) {
            console.log(e)
            setAlert({ variant: 'danger', text: registroMessage[e.code] || "Un error ha ocurrido", duration: 0 })
        }

    }
    return (
        <>
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>

                <input hidden name="userId" {...register("userId")} value={userId?.userInfo?.userId} />

                <Input
                    label={"Titulo"}
                    name={"title"}
                    type={"text"}
                    placeholder={"Ingrese titulo"}
                    register={{ ...register("title", { required: true }) }}
                    errors={errors} />

                <Input
                    label={"Precio"}
                    name={"price"}
                    type={"number"}
                    placeholder={"Ingrese precio"}
                    register={{ ...register("price", { required: true }) }}
                    errors={errors} />

                <Input
                    label={"Descripcion"}
                    name={"descripcion"}
                    type={"text"}
                    placeholder={"Descripcion..."}
                    register={{ ...register("description", { required: true, maxLength: 2000 }) }}
                    errors={errors} />

                <Input
                    label={"Foto"}
                    name={"thumbnail"}
                    type={"text"}
                    placeholder={"Foto del producto"}
                    register={{ ...register("thumbnail", { required: true }) }}
                    errors={errors} />

                <ButtonWithLoading variant="primary" type="submit">Alta</ButtonWithLoading>
            </form>
            <AlertMsg {...alert} />
        </>
    )
}

export default FormUpdateProduct