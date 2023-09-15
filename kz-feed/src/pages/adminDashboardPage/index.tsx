import { Button } from "../../components/button"
import { TitleTwo } from "../../components/typography"

export const AdminDashboardPage = () => {
    return( 
        <section>
            <section>
                <TitleTwo>Suas publicações</TitleTwo>
                <Button buttonstyle="noneoutline" buttonsize="medium">Novo post</Button>
            </section>
            <section>
                <ul>
                    
                </ul>
            </section>
        </section>
    )
}