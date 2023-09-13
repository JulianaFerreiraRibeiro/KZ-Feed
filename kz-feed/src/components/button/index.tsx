import { ReactNode } from "react"
import { StyledButton } from "../../styles/button"

interface IButtonProps{
    children: ReactNode;
    buttonsize: "small" | "medium" | "big";
    buttonstyle: "outline" | "noneoutline";
}

export const Button = ({children, buttonsize, buttonstyle}: IButtonProps) => {
    return (
        <StyledButton buttonsize={buttonsize} buttonstyle={buttonstyle}>{children}</StyledButton>
    )
}