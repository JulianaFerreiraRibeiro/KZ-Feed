import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    buttonsize: "small" | "medium" | "big";
    buttonstyle: "outline" | "noneoutline"
}

export const StyledButton = styled.button<IButtonProps>`
    border-radius: .25rem;
    font-size: var(--font-size-6);
    font-weight: 43.75rem;

    ${({buttonsize}) => {
        switch(buttonsize){
            case "small":
                return css`
                    width: 7rem;
                    height: 2.6875rem;
                ` 
            case "medium": 
                return css`
                    width: 9.0625rem;
                    height: 3.375rem;
                `
            case "big": 
                return css`
                    width: 10.375rem;
                    height: 4rem;
                    font-size: var(--font-size-5);
                `
        }
    }}

    ${({buttonstyle}) => {
        switch(buttonstyle){
            case "outline":
                return css`
                    width: 8.3125rem;
                    height: 2.6875rem;
                    border: 1px solid var(--color-blue);
                    background-color: var(--color-white);
                    color: var(--color-blue);
                `
            case "noneoutline": 
                return css`
                    background-color: var(--color-blue);
                    color: var(--color-white);
                    border: none;
                `
        }
    }}

`