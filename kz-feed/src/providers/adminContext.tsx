import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { IPosts } from "./userContext"

interface IAdminProviderProps{
    children: ReactNode;
}

interface IUserContext{
    adminPosts: IPosts[];
    createPost: (formData: any) => Promise<void>;
}

export const AdminContext = createContext({} as IUserContext)

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

    const createPost = async (formData: any) => {
        const token = localStorage.getItem("@token:KZFeed")
        try{
            const {data} = await api.post("/posts", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAdminPosts([...adminPosts, data])
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <AdminContext.Provider value={{adminPosts, createPost}}>
            {children}
        </AdminContext.Provider>
    )
}