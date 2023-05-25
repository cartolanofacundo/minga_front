
import { NavLink } from "react-router-dom"

export function SwitchButton() {
    return (
        <div className="w-full rounded-full shadow-lg overflow-hidden flex flex-row">
            <NavLink to={"./"} preventScrollReset={true} className="w-1/2 text-center rounded-full p-2" style={({ isActive }) => { return { backgroundColor: isActive ? "#4338CA" : "transparent", color: isActive ? "white" : "#9D9D9D" } }}>
                Description
            </NavLink>
            <NavLink to={`./chapters/1`} preventScrollReset={true} className="w-1/2 text-center rounded-full p-2" style={({ isActive }) => { return { backgroundColor: isActive ? "#4338CA" : "transparent", color: isActive ? "white" : "#9D9D9D" } }}>
                Chapters
            </NavLink>
        </div>
    )
}