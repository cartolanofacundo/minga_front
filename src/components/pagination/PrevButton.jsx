import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "../../assets/icons/Icons"
export function PrevButton({ page, path }) {
    let navigate = useNavigate();
    function handleNavigate(){
        navigate(`${path}/${page - 1}`)
    }
    return (
        <div className="flex flex-row justify-center items-stretch">

            <button onClick={handleNavigate} disabled={page <= 1} className="flex flex-row justify-center p-4 gap-4 font-medium text-[#6B7280] border-t-[3px] border-transparent enabled:hover:border-[#6B7280] enabled:hover:border-opacity-20 enabled:hover:cursor-pointer enabled:hover:text-black"><ChevronLeft /> <span className="hidden lg:inline-block">Previous</span> </button>
        </div>
    )
}