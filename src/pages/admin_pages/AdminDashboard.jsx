import { Outlet } from "react-router-dom";

export function AdminDashBoard(){
    return(
        <>
        <Outlet/>
        <h1>AdminDashBoard</h1>
        </>
        
    )
}