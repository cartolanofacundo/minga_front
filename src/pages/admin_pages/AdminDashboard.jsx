import { Outlet } from "react-router-dom";
import { SwitchButton } from "../../components/admin/SwitchButton";

export function AdminDashBoard() {
    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col justify-start items-center bg-[#ebebeb]">
                <div className="h-[40vh] lg:h-[60vh] w-full flex flex-col justify-center items-center bg-[url('../../src/assets/images/admin_cover_photo.png')] bg-cover bg-top">
                    <h1 className="font-roboto font-medium text-4xl text-white ">Panel</h1>
                </div>
                <div className="grow lg:px-20 min-h-full w-full mt-[-5vh] lg:mt-[-10vh] flex flex-col justify-start items-center">
                    <div className="bg-white min-h-full w-full rounded-t-xl grow flex py-8 flex-col justify-start items-center p-2">
                        <h2 className="text-2xl text-[#4338CA] font-medium font-roboto border-b-4 border-[#4338CA]">Entities</h2>
                        <div className="w-full lg:w-3/4 mt-4 border-[1px] shadow-sm rounded-t-xl">
                            <SwitchButton />
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}