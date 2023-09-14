import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../../styles/input";

interface IInputProps {
    placeholder: string,
    type: string;
    inputsize: "medium" | "big";
    register: UseFormRegisterReturn<string>;
}

export const Input = ({placeholder, type, inputsize, register}: IInputProps) => {
    return( 
        <StyledInput inputsize = {inputsize} placeholder={placeholder} type = {type} {...register}/>
    )
}