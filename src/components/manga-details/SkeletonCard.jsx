import { ImageIcon } from "../../assets/icons/Icons"
export function SkeletonCard() {
    return (
        <>
            <div className="w-full flex flex-row justify-between animate-pulse">
                <div className="w-24 h-24 object-cover rounded-lg bg-slate-500 flex flex-row items-center justify-center" >
                    <ImageIcon />
                </div>
                <div className="flex flex-col justify-between items-center text-center p-2 self-stretch">
                    <div className="h-4 bg-slate-400 rounded-full w-36 mb-4"></div>
                    <div className="h-2 bg-slate-400 rounded-full w-20 mb-2.5"></div>
                </div>
                <div className="bg-slate-400 self-center text-white py-4 px-8 rounded-full font-poppins font-semibold">
                    READ
                </div>
            </div>
        </>

    )

}