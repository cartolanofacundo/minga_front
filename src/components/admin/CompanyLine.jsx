import { UsersSolid } from "../../assets/icons/Icons";
import { ToggleButton } from "./ToggleButton";

export function CompanyLine({company}){
    return(
        <div className="w-full grid grid-cols-10 gap-4 border-b font-roboto items-center font-medium">
            <div className="text-[#4338CA] p-2"><UsersSolid/></div>
            <div className="text-[#484964] py-2 grow col-span-3">{company.name}</div>
            <div className="text-[#484964] grow col-span-3">{company.website}</div>
            <div className="text-[#4338CA] grow col-span-2"><img src={company.logo} className="w-8 h-8 rounded-full object-cover" alt="" /></div>
            <div className="text-[#4338CA] px-2 border-l flex flex-row items-center justify-center self-stretch"><ToggleButton entity={company} path={"company"}/></div>
        </div>
    )
}