import { Outlet } from "react-router-dom";

export function MangaDetails() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-items-start items-center">
                <div className="w-full h-[70px] bg-[#4338CA]"></div>
                <div className="my-4 self-start px-10">Go back</div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-full h-[30vh] lg:h-[60vh] lg:w-[60vw] bg-blue-500 flex flex-col justify-center items-center">


                        <div className="w-full h-full my-2 overflow-hidden flex flex-col justify-center items-center">
                            <img src="https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg" className="h-full w-3/4 object-top object-cover rounded-lg" alt="" />
                        </div>
                    </div>
                    <div className="w-full h-full lg:w-[40vw] bg-yellow-500">
                        <p>
                            title
                        </p>
                    </div>
                </div>

                <div className="bg-red-500 w-full">
                    hola
                    <Outlet />
                </div>
            </div>

        </>

    )
}