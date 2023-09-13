import { Input } from "../input"

export const LoginForm = () => {
    return(
        <form>
            <Input inputsize = "medium" placeholder="E-mail" type="email"/>
            <Input inputsize = "medium" placeholder="Senha" type="password"/>
        </form>
    )
}