import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { IPosts } from './userContext';

interface IAdminProviderProps{
    children: ReactNode;
}

export const AdminContext = createContext({})

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [adminPosts, setAdminPosts] = useState<IPosts[]>([])

    useEffect(() => {
        const getPosts = async () => {
            try{
                const {data} = await api.get("/posts")
                setAdminPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    }, [])
    return(
        <AdminContext.Provider value={{}}>
            {children}
        </AdminContext.Provider>
    )
}