import { ReactNode, createContext } from "react"

interface IAdminProviderProps{
    children: ReactNode;
}

export const AdminContext = createContext({})

export const AdminProvider = ({children}: IAdminProviderProps) => {
    return(
        <AdminContext.Provider value={{}}>
            {children}
        </AdminContext.Provider>
    )
}