import { LoginForm } from "../../components/loginForm"
import loginBanner from "../../assets/login_banner.svg"
import { StyledLoginSection } from "./style"

export const LoginPage = () => {
    return(
        <StyledLoginSection>
            <img src={loginBanner} alt = "imagem de um cenário branco em que há um caderno pequeno com um lápis preto em cima, ao lado há um notebook e uma caneca branca" />
            <LoginForm/>
        </StyledLoginSection>
    )
}