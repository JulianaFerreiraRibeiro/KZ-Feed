import styled from "styled-components";

export const StyledRegisterSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 11.875rem;
    gap: 100px;
    height: 100vh;

    button{
        width: 6.6875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3125rem;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-6);
    }

    a{
        text-decoration: none;
    }
`