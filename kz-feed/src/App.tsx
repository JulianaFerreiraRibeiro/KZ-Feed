import { Footer } from "./components/footer"
import { SessionProvider } from "./providers/sessionContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"

function App() {

  return (
    <>
      <GlobalStyles/>
      <SessionProvider>
        <AppRoutes/>
      </SessionProvider>
      <Footer/>
    </>
  )
}

export default App
