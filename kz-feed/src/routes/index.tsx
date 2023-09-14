import { Routes } from "react-router"
import { LoginPage } from "../pages/loginPage"
import { Route } from "react-router-dom"
import { RegisterPage } from "../pages/registerPage"
import { DashboardPage } from "../pages/dashboardPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/login" element = {<LoginPage/>} />
            <Route path = "/register" element={<RegisterPage/>} />
            <Route path = "/" element={<DashboardPage/>} />

        </Routes>
    )
}