import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../../styles/input";
import { ParagraphTwo } from "../typography";

interface IInputProps {
    placeholder: string;
    type: string;
    inputsize: "medium" | "big";
    register: UseFormRegisterReturn<string>;
    error?: string;
}

export const Input = ({placeholder, type, inputsize, register, error}: IInputProps) => {
    return( 
        <>
            <StyledInput inputsize = {inputsize} placeholder={placeholder} type = {type} {...register}/>
            <ParagraphTwo>{error}</ParagraphTwo>
        </>
    )
}