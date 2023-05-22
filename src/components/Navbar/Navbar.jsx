import { useEffect, useState } from "react"
import { Hamburguer, CloseIcon } from "../../assets/icons/Icons"
import navbar_logo from "../../assets/images/navbar_logo.png"
import { Links } from "./Links"
import { UserInfo } from "./UserInfo"
import { useLocation } from "react-router-dom"
import { Logout } from "./Logout"
import { useSelector } from "react-redux"

export function Navbar() {
    const location = useLocation()
    const [show, setShow] = useState(false)
    let { token } = useSelector(store => store.user)
    useEffect(() => {
        if (show) {
            setShow(false)
        }
    }, [location])
    return (
        <>
            {show &&
                <div id="overlay" className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.7)] z-50" onClick={(e) => e.target.id === "overlay" && setShow(false)}>
                    <nav className="h-screen w-[100vw] sm:w-[50vw] lg:w-[33vw] bg-[#4338CA] z-50 p-4 flex flex-col justify-start items-center relative">
                        <div className="flex flex-row justify-between w-full border-b-[1px] border-white py-4 ">
                            {
                                token && <UserInfo />
                            }

                            <button className="text-white" onClick={() => setShow(false)}>
                                <CloseIcon />
                            </button>
                        </div>

                        <Links />
                        {
                            token && <Logout />
                        }

                    </nav>
                </div>
            }
            <div className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center px-8 py-4 z-20">
                <button className="text-white text-3xl" onClick={() => setShow(!show)}>
                    <Hamburguer />
                </button>
                <a href="">
                    <img className="h-[40px]" src={navbar_logo} alt="" />
                </a>
            </div>

        </>
    )
}