import { ParagraphOne, ParagraphTwo, TitleOne, TitleTwo } from "../../components/typography"
import dashboard_banner from "../../assets/dashboard_banner.svg"
import { Button } from "../../components/button"
import { StyledDashboardSection } from "./style"

export const DashboardPage = () => {
    return(
        <StyledDashboardSection>
            <section className="dashboardHeader">
                <ParagraphTwo className="dashboardName">KZ FEED</ParagraphTwo>
                <TitleOne>Seja muito bem vindo ao KZ Feed</TitleOne>
                <ParagraphOne>Fique por dentro das últimas notícias</ParagraphOne>
                <img src={dashboard_banner} alt="banner da página de dashboard, imagem entrecortada, que possui um caderninho com um lápis preto em cima, ao lado há um notebook e uma xícara branca" />
            </section>
            <section className="dashboardMain">
                <TitleTwo>Últimas notícias</TitleTwo>
                <Button buttonstyle="noneoutline" buttonsize="small">Ver tudo</Button>
            </section>
                <section>
                    <ul>
                        
                    </ul>
                </section>
        </StyledDashboardSection>
    )
}