import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function ProtectedRoute({ children, role: roleValidate }) {
    let tokenStorage = JSON.parse(localStorage.getItem("token"));
    let { token, user } = useSelector((store) => store.user)
    const [loading, setLoading] = useState(tokenStorage ? true : false)
    useEffect(() => {
        if(token){
            setLoading(false)
        }
    },[token])
    if (loading) {
        return <p>loading...</p>
    }
    if (!token) {
        return <Navigate to={"/login"} replace={true} />
    }
    if (!roleValidate.includes(user?.role)) {
        return <Navigate to={"/"} replace={true} />
    }
    return children
}