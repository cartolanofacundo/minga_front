import { Navbar } from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import userActions from "./store/user/authActions"
import categoriesActions from "./store/categories/categoriesActions"
import {Routes} from "./routes/Routes"
import { Toaster } from "react-hot-toast"

const {sign_in_token} = userActions
const {get_categories} = categoriesActions

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_categories())
    let token = JSON.parse(localStorage.getItem("token"))
    if(token){
      dispatch(sign_in_token())
    }
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Toaster/>
      <header>
        <Navbar />
      </header>
      <Routes/>
    </div>

  )
}

export default App
