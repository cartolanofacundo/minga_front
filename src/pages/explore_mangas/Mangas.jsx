import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function Mangas(){
    let location = useLocation()
    useEffect(() => {
        console.log(location)
    })
    return(
        <h1>Mangas</h1>
    )
}