import styled from "styled-components";

export const StyledRegisterFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-right: 150px;
    align-items: center;

    .registerFormHeader{
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
    }
    
    .registerForm{
        display: flex;
        width: 47.375rem;
        height: 10.875rem;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;

        button{
            width: 166px;
            height: 54px;
            font-size: var(--font-size-6);
            margin-left: 585px;
            margin-top: 15px;
        }

    }
    
        
`