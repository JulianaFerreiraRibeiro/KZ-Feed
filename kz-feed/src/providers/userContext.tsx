import { createContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { api } from '../services/api';

interface IUserProviderProps{
    children: ReactNode;
}

interface IPosts{
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    image: string;
}

interface IUserContext{
    posts: IPosts[]
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProviderProps) => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        const getPosts = async () => {
            try{
                const {data} = await api.get("/posts")
                setPosts(data)
            } catch (error){
                console.log(error)
            }
        }

        getPosts()
    }, [])

    return(
        <UserContext.Provider value={{posts}}>
            {children}
        </UserContext.Provider>
    )
}