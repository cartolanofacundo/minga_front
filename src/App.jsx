import { Navbar } from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import actions from "./store/user/authActions"
import {Routes} from "./routes/Routes"

const {sign_in_token} = actions

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"))
    if(token){
      dispatch(sign_in_token())
    }
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <header>
        <Navbar />
      </header>
      <Routes/>
    </div>

  )
}

export default App
