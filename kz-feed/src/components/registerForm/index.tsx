import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"
import { IRegisterFormValues, schema } from "./registerSchema";
import { StyledRegisterFormContainer } from "./style"
import { useForm } from 'react-hook-form'
import { useContext } from "react"
import { SessionContext } from "../../providers/sessionContext";


export interface IRegisterFormData{
    name: string;
    email: string;
    password: string;
    confirm: string;
}

export const RegisterForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IRegisterFormValues>({
        resolver: zodResolver(schema)
    })

    const {handleRegister} = useContext(SessionContext)

    const submit = async (formData: IRegisterFormData) => {
        console.log(formData)
        await handleRegister(formData)
    }
    return(
        <StyledRegisterFormContainer>
            <section className = "registerFormHeader">
                <TitleTwo>Cadastre um usuário</TitleTwo>
                <ParagraphOne>Preencha os campos corretamente para fazer cadastro</ParagraphOne>
            </section>
            <form className="registerForm" onSubmit={handleSubmit(submit)}>  
                <Input inputsize="medium" placeholder="Nome" type = "text" register={register("name")} error = {errors.name?.message}/>
                <Input inputsize="medium" placeholder="Email" type="email" register={register("email")} error={errors.email?.message}/>
                <Input inputsize="medium" placeholder="Senha" type="password" register={register("password")} error={errors.password?.message}/>
                <Input inputsize="medium" placeholder="Confirmar senha" type="password" register={register("confirm")} error = {errors.confirm?.message}/>
                <Button buttonstyle="noneoutline" buttonsize="big">Cadastrar-se</Button>
            </form>
        </StyledRegisterFormContainer>
    )
}