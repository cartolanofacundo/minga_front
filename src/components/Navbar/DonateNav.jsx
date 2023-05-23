import { NavLink } from "react-router-dom"
import { Heart } from "../../assets/icons/Icons"

export function DonateNav() {
    return (
        <div className="border-t-[1px] border-t-white w-full p-4">
            <NavLink to={"/donate"} className="w-full  flex flex-row items-center justify-center rounded-lg  text-white text-center py-2 px-4 font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                Donate <Heart />
            </NavLink>
        </div>
    )
}