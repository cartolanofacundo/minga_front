import { NothingIcon } from "../../assets/icons/Icons"
export function NothingToShow(){
    return(
        <div className="min-w-full min-h-full flex flex-col justify-center items-center text-slate-300 font-roboto font-medium">
            <NothingIcon/>
            <p>No manga matches your filters</p>
        </div>
    )
}