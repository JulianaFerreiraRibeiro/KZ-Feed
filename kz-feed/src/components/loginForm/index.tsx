import { Link } from "react-router-dom"
import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"
import { StyledLoginFormContainer } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ILoginFormValues, schema } from "./loginSchema"
import { useContext } from "react"
import { SessionContext } from "../../providers/sessionContext"

export interface ILoginFormData{
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ILoginFormValues>({
        resolver: zodResolver(schema)
    })

    const {handleLogin} = useContext(SessionContext)

    const submit = async (formData: ILoginFormData): Promise<void> => {
        console.log(formData)
        await handleLogin(formData)
    }

    return(
        <> 
            <StyledLoginFormContainer>
                <section className="loginFormHeader">
                    <TitleTwo>Acesse o KZFeed</TitleTwo>
                    <ParagraphOne>Preencha os campos corretamente para fazer login</ParagraphOne>
                </section>
                <form className="loginForm" onSubmit={handleSubmit(submit)}>
                    <Input inputsize = "medium" placeholder="E-mail" type="email" register={register("email")} error = {errors.email?.message}/>
                    <Input inputsize = "medium" placeholder="Senha" type="password" register={register("password")} error = {errors.password?.message}/>
                    <Button buttonsize="medium" buttonstyle="noneoutline">Entrar</Button> 
                </form>
                <section className="loginFormFooter">
                    <ParagraphOne>Não é cadastrado?</ParagraphOne>
                    <Link to = "/register">Cadastre-se</Link>
                </section>
            </StyledLoginFormContainer>
        </>
    )
}