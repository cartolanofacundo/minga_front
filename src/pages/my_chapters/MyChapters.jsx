import { Outlet } from "react-router-dom";

export function MyChapters() {
    return (
        <>
            <Outlet />
            <h1>MyChapters</h1>
        </>
    )
}