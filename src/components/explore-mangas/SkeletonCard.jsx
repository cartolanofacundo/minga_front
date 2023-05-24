import { ImageIcon } from "../../assets/icons/Icons"
export function SkeletonCard() {
    return (
        <>
            <div role="status" className="w-full flex flex-row h-[200px] shadow rounded-lg justify-between items-center lg:w-1/3 animate-pulse overflow-hidden" >
                <div className="h-2/3 bg-slate-400 w-[4px]"></div>
                <div className="flex flex-col items-start justify-center h-full grow p-4">
                    <div>
                        <div className="h-4 bg-slate-400 rounded-full w-36 mb-4"></div>
                        <div className="h-2 bg-slate-400 rounded-full w-20 mb-2.5"></div>
                    </div>
                </div>

                <div className="mr-[-50px] h-[300px] w-[200px] sm:w-[250px] object-cover rounded-[100%] bg-slate-400 flex flex-row justify-center items-center" alt="">
                    <ImageIcon />
                </div>
            </div>
        </>

    )

}