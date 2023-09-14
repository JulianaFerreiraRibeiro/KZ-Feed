import styled, { css } from "styled-components";

interface IStyledInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    inputsize: "medium" | "big";
}

export const StyledInput = styled.input<IStyledInputProps>`
    width: 23.125rem;
    border-radius: .25rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 15px;
    
    ${({inputsize}) => {
        switch(inputsize){
            case "medium":
                return css`
                    height: 3.5rem;

                    ::placeholder{
                        font-size: var(--font-size-5);
                    }
                    
                `
            case "big":
                return css`
                    height: 4rem;

                    ::placeholder{
                        font-size: var(--font-size-4);
                    }
                `
        }
    }}

    ::placeholder{
        font-weight: var(--font-weight-2);
    }
`