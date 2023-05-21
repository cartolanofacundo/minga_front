import { Login } from "./pages/auth_pages/Login"
import { Navbar } from "./components/Navbar/Navbar"
function App() {


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <header>
        <Navbar />
      </header>
      <Login />
    </div>

  )
}

export default App
