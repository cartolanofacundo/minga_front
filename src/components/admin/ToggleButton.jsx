import { useState } from "react"
import actions from "../../store/admin/adminActions"
import { useDispatch } from "react-redux"
const {toogle_company, toogle_author} = actions;
export function ToggleButton({entity, path}){
    let dispatch = useDispatch()
    function handleClick(){
        if(path === "company"){
            dispatch(toogle_company({company_id:entity._id,active: !entity.active}))
        }
        if(path === "author"){
            dispatch(toogle_author({author_id:entity._id,active: !entity.active}))
        }

    }
    return(
        <>
        {entity.active ? <button onClick={handleClick} className="w-8 h-2 p-2 rounded-lg bg-[#4338CA] relative">
            <div className="absolute top-1 right-1 bg-white w-2 h-2 rounded-full">

            </div>
        </button> : <button onClick={handleClick} className="w-8 h-2 p-2 rounded-lg bg-[rgba(0,0,0,0.2)] relative">
            <div className="absolute top-1 left-1 bg-white w-2 h-2 rounded-full">

            </div>
        </button> }
        </>
        
    )
}