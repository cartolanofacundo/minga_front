import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export function SwitchButton() {
    const { page } = useSelector(store => store.chapters)
    return (
        <div className="w-full rounded-t-xl border-b-2 border-b-[#4338CA] overflow-hidden flex flex-row">
            <NavLink to={"./"} preventScrollReset={true} className="w-1/2 text-center rounded-tl-xl p-2 font-medium text-lg font-roboto" style={({ isActive }) => { return { backgroundColor: isActive ? "#4338CA" : "transparent", color: isActive ? "white" : "#4338CA" } }}>
                Companies
            </NavLink>
            <NavLink to={"./authors"} preventScrollReset={true} className="w-1/2 text-center rounded-tr-xl p-2 font-medium text-lg font-roboto" style={({ isActive }) => { return { backgroundColor: isActive ? "#4338CA" : "transparent", color: isActive ? "white" : "#4338CA" } }}>
                Authors
            </NavLink>
{/*             <NavLink to={`./authors`} preventScrollReset={true} className="w-1/2 text-center rounded-full p-2" style={({ isActive }) => { return { backgroundColor: isActive ? "#4338CA" : "transparent", color: isActive ? "white" : "#9D9D9D" } }}>
                Authors
            </NavLink> */}
        </div>
    )
}