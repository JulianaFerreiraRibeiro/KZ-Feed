import { Button } from "../button"
import { Input } from "../input"
import { ParagraphOne, TitleTwo } from "../typography"

export const RegisterForm = () => {
    return(
        <section>
            <section>
                <TitleTwo>Cadastre um usuário</TitleTwo>
                <ParagraphOne>Preencha os campos corretamente para fazer cadastro</ParagraphOne>
            </section>
            <form>  
                <Input inputsize="medium" placeholder="Nome" type = "text"/>
                <Input inputsize="medium" placeholder="Email" type="email"/>
                <Input inputsize="medium" placeholder="Senha" type="password"/>
                <Input inputsize="medium" placeholder="Confirmar senha" type="password"/>
                <Button buttonstyle="noneoutline" buttonsize="big">Cadastrar-se</Button>
            </form>
        </section>
    )
}