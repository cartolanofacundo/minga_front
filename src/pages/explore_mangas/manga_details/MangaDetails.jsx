import { Outlet, useParams } from "react-router-dom";
import { Reactions } from "../../../components/manga-details/Reactions";
import { Stats } from "../../../components/manga-details/Stats";
import { Category } from "../../../components/manga-details/Category";
import { SwitchButton } from "../../../components/manga-details/SwithButton";

export function MangaDetails() {
    
    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col justify-start items-center bg-[#EBEBEB]">
                <div className="w-full h-[70px] bg-[#4338CA]"></div>
                <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start lg:p-8">
                    <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex flex-col justify-center items-center">
                        <img className="w-full lg:w-3/4 h-full lg:h-[80vh] object-cover object-top lg:rounded-xl" src="https://i.postimg.cc/xCsc02ph/main-buenasnochespunpun.jpg" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 py-4 px-2 lg:h-full flex flex-col justify-center items-center">
                        <div className="w-full lg:w-3/4 flex flex-col gap-4">
                            <h1 className="font-medium font-poppins text-4xl pl-1 ">Alice in Borderland</h1>
                            <div className="w-full flex flex-row justify-between">
                                <Category />
                                <p className="flex flex-row justify-center items-center text-[#9D9D9D] font-roboto font-medium text-xl">Company name</p>
                            </div>
                            <Reactions />
                            <Stats />
                            <SwitchButton />
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}