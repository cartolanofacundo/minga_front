import { SearchLupa } from "../../assets/icons/Icons"

export function SearchBar({handleQuery}) {
    return (
        <div className="w-full bg-[#EBEBEB] py-2 px-4 rounded flex flex-row items-center">
            <div className="mr-4 text-[#999999] ">
                <SearchLupa />
            </div>
            <input type="search" onChange={(e) => handleQuery(e)} className="w-full h-full bg-transparent placeholder:text-1xl placeholder:text-[#999999] focus:outline-none" placeholder="Find your manga here" />
        </div>
    )
}