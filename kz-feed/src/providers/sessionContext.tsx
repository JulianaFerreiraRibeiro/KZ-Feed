import { ReactNode, createContext } from "react"
import { IRegisterFormData } from "../components/registerForm"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ILoginFormData } from "../components/loginForm"


interface ISessionProviderProps{
    children: ReactNode;
}

interface ISessionContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
}

export const SessionContext = createContext({} as ISessionContext)

export const SessionProvider = ({children}: ISessionProviderProps) => {

    const navigate = useNavigate()

    const handleRegister = async (formData: IRegisterFormData) => {
        try{
            const {data} = await api.post("/users", formData)
            console.log(data)
            toast.success("Registro realizado com sucesso!")
            navigate("/login")
        } catch (error: any) {
            console.log(error)
            toast.error("Email já cadastrado!")
        }
    }

    const handleLogin = async (formData: ILoginFormData) => {
        try{
            const {data} = await api.post("/login", formData)
            console.log(data)
            navigate("/adminDashboard")
            toast.success("Login realizado com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Credenciais erradas!")

        }
    }
    return(
        <SessionContext.Provider value={{handleRegister, handleLogin}}>
            {children}
        </SessionContext.Provider>
    )
}