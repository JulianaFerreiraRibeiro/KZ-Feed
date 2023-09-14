import styled from "styled-components";

export const StyledLoginFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    align-items: center;

    .loginFormHeader{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        align-items: center;
    }

    .loginForm{
        display: flex;
        flex-direction: column;
        gap: 10px;

        button{
            width: 23.125rem;
            font-weight: var(--font-weight-1);
        }
    }

    .loginFormFooter{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        a{
            color: var(--color-blue);
        }
    }
`