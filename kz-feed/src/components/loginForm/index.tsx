import { Link } from "react-router-dom"
import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"
import { StyledLoginFormContainer } from "./style"

export const LoginForm = () => {
    return(
        <> 
            <StyledLoginFormContainer>
                <section className="loginFormHeader">
                    <TitleTwo>Acesse o KZFeed</TitleTwo>
                    <ParagraphOne>Preencha os campos corretamente para fazer login</ParagraphOne>
                </section>
                <form className="loginForm">
                    <Input inputsize = "medium" placeholder="E-mail" type="email"/>
                    <Input inputsize = "medium" placeholder="Senha" type="password"/>
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