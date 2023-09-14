import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-black: rgba(0, 0, 0, 1);
        --color-white: rgba(255, 255, 255, 1);
        --color-gray: rgba(243, 243, 243, 1);
        --color-blue: rgba(85, 163, 255, 1);
        
        --font-size-1: 3.25rem;
        --font-size-2: 2.75rem;
        --font-size-3: 2.25rem;
        --font-size-4: 1.4375rem;
        --font-size-5: 1.125rem;
        --font-size-6: .875rem;

        --font-weight-1: 700;
        --font-weight-2: 400;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        font-family: 'Lora', serif;
        overflow-x: hidden;

    }

    button, input, input::placeholder, img{
        font-family: 'Inter', sans-serif;
        cursor: pointer;
    }

    p{
        font-family: 'Inter', sans-serif;
    }

    a{ 
        font-family: 'Inter', sans-serif;
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-1);
    }

    li{
        list-style: none;
    }

`