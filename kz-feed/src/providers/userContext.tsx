import { createContext } from 'react';
import { ReactNode } from 'react';

interface IUserProviderProps{
    children: ReactNode;
}

export const UserContext = createContext({})

export const UserProvider = ({children}: IUserProviderProps) => {

    
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}