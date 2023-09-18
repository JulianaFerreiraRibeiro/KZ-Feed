import { Routes } from "react-router"
import { LoginPage } from "../pages/loginPage"
import { Route } from "react-router-dom"
import { RegisterPage } from "../pages/registerPage"
import { DashboardPage } from "../pages/dashboardPage"
import { AdminDashboardPage } from "../pages/adminDashboardPage"
import { AdminProvider } from "../providers/adminContext"
import { ProtectedRoutes } from "./protectedRoutes"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/login" element = {<LoginPage/>} />
            <Route path = "/register" element={<RegisterPage/>} />
            <Route path = "/" element={<DashboardPage/>} />
            <Route path="/dashboard" element={
                <AdminProvider>
                    <ProtectedRoutes/>
                </AdminProvider>
            }>
                <Route index element = {<AdminDashboardPage/>}/>
            </Route>
        </Routes>
    )
}