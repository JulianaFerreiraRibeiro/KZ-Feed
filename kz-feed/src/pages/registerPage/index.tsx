import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import arrow from "../../assets/blue_arrow.svg"

export const RegisterPage = () => {
    return(
        <section>
            <Link to = "/login">
                <Button buttonstyle="outline" buttonsize="small">
                    <img src={arrow} alt="imagem de uma flecha apontado para a esquerda, a flecha é azul e retorna para a página de login"/>
                    Voltar
                </Button>
            </Link>
        </section>
    )
}