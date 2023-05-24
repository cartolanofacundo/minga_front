import { ChevronRight } from "../../assets/icons/Icons"
import { useNavigate } from "react-router-dom";

export function NextButton({ path, pages, page }) {
    let navigate = useNavigate();
    function handleNavigate(){
        navigate(`${path}/${parseInt(page) + 1}`)
    }
    return (
        <div className="flex flex-row justify-center items-stretch">
            <button disabled={pages?.length <= page} onClick={handleNavigate} className="flex flex-row justify-center p-4 gap-4 font-medium text-[#6B7280] border-t-[3px] border-transparent enabled:hover:border-[#6B7280] enabled:hover:border-opacity-20 enabled:hover:cursor-pointer enabled:hover:text-black"><span className="hidden lg:inline-block">Next</span>  <ChevronRight /> </button>
        </div>
    )
}