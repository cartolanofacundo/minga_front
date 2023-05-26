import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
export function Links() {
    const { user, token } = useSelector(store => store.user)
    let {page} = useSelector(store => store.mangas)
    return (
        <div className="flex flex-col justify-start items-center gap-4 p-4 w-full grow">
            <NavLink to={"/"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                Home
            </NavLink>

            {!token &&
                <>
                    <NavLink to={"/login"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                        Login
                    </NavLink>
                    <NavLink to={"/register"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                        Register
                    </NavLink>
                </>
            }
            {
                token &&
                <NavLink to={`/mangas/${page}`} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                    Explore Mangas
                </NavLink>
            }
            {
                user?.role === 3 &&
                <NavLink to={"/admin"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                    Dashboard
                </NavLink>
            }
            {user?.role === 0 &&
                <NavLink to={"/become-member"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                    Become Member
                </NavLink>
            }

            {
                user?.role === 2 || user?.role === 1 &&
                <>
                    <NavLink to={"/mymangas/1"} className="w-full  text-white text-start p-2 px-4 rounded-lg font-bold font-roboto border-[1px] border-transparent hover:border-[#ffffff]" style={({ isActive }) => { return { backgroundColor: isActive ? "#ffffff" : "transparent", color: isActive ? "#4338CA" : "#ffffff" } }}>
                        My mangas
                    </NavLink>
                </>
            }


        </div>
    )
}