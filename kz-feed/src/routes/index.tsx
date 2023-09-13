import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/loginPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/login" element = {<LoginPage/>} />
        </Routes>
    )
}