import { ReactNode, createContext } from "react"
import { IRegisterFormData } from "../components/registerForm";
import { api } from "../services/api";

interface ISessionProviderProps{
    children: ReactNode;
}

interface ISessionContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
}

export const SessionContext = createContext({} as ISessionContext)

export const SessionProvider = ({children}: ISessionProviderProps) => {

    const handleRegister = async (formData: IRegisterFormData) => {
        try{
            const {data} = await api.post("/users", formData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <SessionContext.Provider value={{handleRegister}}>
            {children}
        </SessionContext.Provider>
    )
}