import { Outlet, useParams } from "react-router-dom";
import { Reactions } from "../../../components/manga-details/Reactions";
import { Stats } from "../../../components/manga-details/Stats";
import { Category } from "../../../components/manga-details/Category";
import { SwitchButton } from "../../../components/manga-details/SwithButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/chapters/chaptersActions";

const {get_manga} = actions
export function MangaDetails() {
    const {manga_id} = useParams()
    const dispatch = useDispatch()
    const  {manga_id: manga_id_global, manga} = useSelector(store => store.chapters)
    useEffect(() => {
        if(manga_id !== manga_id_global){
            dispatch(get_manga({
                manga_id,
                path: "/chapters"
            }))
        }
        
    },[manga_id])
    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col justify-start items-center bg-[#EBEBEB]">
                <div className="w-full h-[70px] bg-[#4338CA]"></div>
                <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start lg:p-8">
                    <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex flex-col justify-center items-center">
                        <img className="w-full lg:w-3/4 h-full lg:h-[80vh] object-cover object-top lg:rounded-xl" src={manga?.cover_photo} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 py-4 px-2 lg:h-full flex flex-col justify-center items-center">
                        <div className="w-full lg:w-3/4 flex flex-col gap-4">
                            <h1 className="font-medium font-poppins text-4xl pl-1 ">{manga?.title}</h1>
                            <div className="w-full flex flex-row justify-between">
                                <Category />
                                <p className="flex flex-row justify-center items-center text-[#9D9D9D] font-roboto font-medium text-xl">{manga?.company_id ? manga?.company_id?.name : manga?.author_id?.name }</p>
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