import axios from "axios"
import { apiUrl } from "../../utils/api"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/chapters/chaptersActions"
export function Reactions() {

    const { manga, userReactions } = useSelector(store => store.chapters)
    const { send_reaction } = actions
    const { manga_id } = useParams()
    let dispatch = useDispatch()


    const handleClick = (name) => {
        dispatch(send_reaction({ manga_id, name }))
        
    } 
    return (
        <div className="w-full flex flew-row justify-between items-center">
            <>
                <button onClick={() => handleClick('like')} className={userReactions?.like ? "shadow-lg bg-[#aac565] rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center" : "shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center"}>
                    <p className="text-3xl">👍<span>{manga?.reactions?.like}</span></p>
                </button>
                <button onClick={() => handleClick('dislike')} className={userReactions?.dislike ? "shadow-lg bg-[#c21d2b] rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center" : "shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center"}>
                    <p className="text-3xl">👎️<span>{manga?.reactions?.dislike}</span></p>
                </button>
                <button onClick={() => handleClick('surprised')} className={userReactions?.surprised ? "shadow-lg bg-[#af6520] rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center" : "shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center"}>
                    <p className="text-3xl">😮<span>{manga?.reactions?.surprised}</span></p>
                </button>
                <button onClick={() => handleClick('heart')} className={userReactions?.heart ? "shadow-lg bg-[#c65aa9] rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center" : "shadow-lg bg-white rounded-full px-4 py-4 overflow-hidden flex flex-row items-center justify-center"}>
                    <p className="text-3xl">😍<span>{manga?.reactions?.heart}</span></p>
                </button>
            </>

        </div>

    )
}