import { Link } from "react-router-dom"
import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"
import { StyledLoginFormContainer } from "./style"
import { useForm } from "react-hook-form"

interface ILoginFormData{
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register} = useForm<ILoginFormData>()

    const submit = async (formData: ILoginFormData): Promise<void> => {
        console.log(formData)
    }

    return(
        <> 
            <StyledLoginFormContainer>
                <section className="loginFormHeader">
                    <TitleTwo>Acesse o KZFeed</TitleTwo>
                    <ParagraphOne>Preencha os campos corretamente para fazer login</ParagraphOne>
                </section>
                <form className="loginForm" onSubmit={handleSubmit(submit)}>
                    <Input inputsize = "medium" placeholder="E-mail" type="email" register={register("email")}/>
                    <Input inputsize = "medium" placeholder="Senha" type="password" register={register("password")}/>
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