import { Link } from "react-router-dom"
import { ParagraphTwo, TitleThree } from "../typography"
import { IPosts } from "../../providers/userContext"

interface IPostCardProps{
    post: IPosts
}

export const PostCard = ({post}: IPostCardProps) => {
    return( 
        <li>
            <section>
                <img src={post.image} alt={post.title} />
                <ParagraphTwo>{post.owner}</ParagraphTwo>
                <TitleThree>{post.title}</TitleThree>
            </section>
            <Link to = "/post">Saiba mais</Link>
        </li>
    )
}