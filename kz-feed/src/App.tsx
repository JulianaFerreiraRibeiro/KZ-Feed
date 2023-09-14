import { ToastContainer } from "react-toastify"
import { Footer } from "./components/footer"
import { SessionProvider } from "./providers/sessionContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <GlobalStyles/>
      <SessionProvider>
        <ToastContainer/>
        <AppRoutes/>
      </SessionProvider>
      <Footer/>
    </>
  )
}

export default App
