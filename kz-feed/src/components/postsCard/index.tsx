import { Link } from "react-router-dom"
import { ParagraphTwo, TitleThree } from "../typography"

export const PostCard = () => {
    return( 
        <li>
            <section>
                <img src="" alt="" />
                <ParagraphTwo></ParagraphTwo>
                <TitleThree></TitleThree>
            </section>
            <Link to = "/post">Saiba mais</Link>
        </li>
    )
}