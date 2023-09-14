import { ReactNode } from "react"
import { StyledParagraphOne, StyledParagraphTwo, StyledTitleFour, StyledTitleOne, StyledTitleThree, StyledTitleTwo } from "../../styles/typography"

interface ITypographyProps{
    children: ReactNode;
    className?: string;
}

export const TitleOne = ({children}: ITypographyProps) => {
    return(
        <StyledTitleOne>{children}</StyledTitleOne>
    )
}

export const TitleTwo = ({children}: ITypographyProps) => {
    return(
        <StyledTitleTwo>{children}</StyledTitleTwo>
    )
}

export const TitleThree = ({children}: ITypographyProps) => {
    return(
        <StyledTitleThree>{children}</StyledTitleThree>
    )
}

export const TitleFour = ({children}: ITypographyProps) => {
    return(
        <StyledTitleFour>{children}</StyledTitleFour>
    )
}


export const ParagraphOne = ({children}: ITypographyProps) => {
    return(
        <StyledParagraphOne>{children}</StyledParagraphOne>
    )
}

export const ParagraphTwo = ({children, className}: ITypographyProps) => {
    return(
        <StyledParagraphTwo className={className}>{children}</StyledParagraphTwo>
    )
}