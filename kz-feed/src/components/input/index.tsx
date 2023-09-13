interface IInputProps {
    placeholder: string,
    type: string;
}

export const Input = ({placeholder, type}: IInputProps) => {
    return( 
        <input placeholder={placeholder} type = {type}/>
    )
}