import { Routes } from "react-router"
import { LoginPage } from "../pages/loginPage"
import { Route } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/login" element = {<LoginPage/>} />
        </Routes>
    )
}