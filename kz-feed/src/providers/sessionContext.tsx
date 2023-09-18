import { ReactNode, createContext, useState } from "react"
import { IRegisterFormData } from "../components/registerForm"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ILoginFormData } from "../components/loginForm"


interface ISessionProviderProps{
    children: ReactNode;
}

interface IAdmin{
    acessToken: string
    user: {
        email: string
        name: string
        id: number
    }
}

interface ISessionContext{
    handleRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogin: (formData: ILoginFormData) => Promise<void>;
    admin: IAdmin | null
}

export const SessionContext = createContext({} as ISessionContext)

export const SessionProvider = ({children}: ISessionProviderProps) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null)
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
            setAdmin(data)
            navigate("/adminDashboard")
            toast.success("Login realizado com sucesso!")
            localStorage.setItem("@token:KZFeed", data.accessToken)
        } catch (error) {
            console.log(error)
            toast.error("Credenciais erradas!")

        }
    }
    return(
        <SessionContext.Provider value={{handleRegister, handleLogin, admin}}>
            {children}
        </SessionContext.Provider>
    )
}