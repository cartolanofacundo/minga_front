import { Outlet } from "react-router-dom";

export function MyProfile() {
    return (
        <>
            <Outlet />
            <h1>MyProfile</h1>
        </>

    )
}