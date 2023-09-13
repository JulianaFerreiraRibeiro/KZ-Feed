import { Input } from "../input"

export const LoginForm = () => {
    return(
        <form>
            <Input placeholder="E-mail" type="email"/>
            <Input placeholder="Senha" type="password"/>
        </form>
    )
}