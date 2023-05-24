import { useNavigate } from "react-router-dom"

export function Pages({ pages, page, path }) {
    let navigate = useNavigate()
    function handleSetPage(item){
        navigate(`${path}/${item}`)
    }
    return (
        <div className="flex flex-row justify-center items-stretch grow">
            {pages?.map((item) => {
                return <button onClick={() => handleSetPage(item)} key={item} className="border-t-[3px] border-t-transparent p-4 flex flex-row 
                justify-center font-medium hover:border-[#6B7280] hover:border-opacity-20 hover:cursor-pointer text-[#6B7280] hover:text-black"
                    style={{ borderTopColor: page == item && "#4338CA", color: page == item && "#4338CA" }}>
                    {item}
                </button>
            })}

        </div>
    )
}