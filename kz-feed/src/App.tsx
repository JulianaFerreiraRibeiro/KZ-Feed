import { ToastContainer } from "react-toastify"
import { Footer } from "./components/footer"
import { SessionProvider } from "./providers/sessionContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./providers/userContext"


function App() {

  return (
    <>
      <GlobalStyles/>
      <SessionProvider>
        <UserProvider>
          <ToastContainer/>
          <AppRoutes/>
        </UserProvider>
      </SessionProvider>
      <Footer/>
    </>
  )
}

export default App
