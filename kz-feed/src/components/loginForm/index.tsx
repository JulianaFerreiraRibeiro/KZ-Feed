import { Link } from "react-router-dom"
import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"

export const LoginForm = () => {
    return(
        <> 
            <section>
                <TitleTwo>Acesse ao KZFeed</TitleTwo>
                <ParagraphOne>Preencha os campos corretamente para fazer login</ParagraphOne>
            </section>
            <form>
                <Input inputsize = "medium" placeholder="E-mail" type="email"/>
                <Input inputsize = "medium" placeholder="Senha" type="password"/>
                <Button buttonsize="medium" buttonstyle="noneoutline">Entrar</Button> 
            </form>
            <section>
                <ParagraphOne>Não é cadastrado?</ParagraphOne>
                <Link to = "/register">Cadastre-se</Link>
            </section>
        </>
    )
}