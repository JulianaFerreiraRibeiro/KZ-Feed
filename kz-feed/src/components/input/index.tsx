import { StyledInput } from "../../styles/input";

interface IInputProps {
    placeholder: string,
    type: string;
    inputsize: "medium" | "big";
}

export const Input = ({placeholder, type, inputsize}: IInputProps) => {
    return( 
        <StyledInput inputsize = {inputsize} placeholder={placeholder} type = {type}/>
    )
}