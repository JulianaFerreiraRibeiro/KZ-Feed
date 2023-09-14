import { ReactNode, createContext } from "react"
import { IRegisterFormData } from "../components/registerForm"
import { api } from "../services/api"
import { toast } from "react-toastify";


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
            toast.success("Registro realizado com sucesso")
        } catch (error: any) {
            console.log(error)
            toast.error("Email já cadastrado!")
        }
    }
    return(
        <SessionContext.Provider value={{handleRegister}}>
            {children}
        </SessionContext.Provider>
    )
}