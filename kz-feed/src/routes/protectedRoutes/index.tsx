import { useContext } from "react"
import { SessionContext } from "../../providers/sessionContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const {admin} = useContext(SessionContext)

    return admin ? <Outlet/> : <Navigate to = "/" />
}