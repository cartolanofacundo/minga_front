import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import actions from "../../store/read/readActions"

const {get_pages, set_page} = actions

export function ReadChapter() {
    let {page,chapter_id} =  useParams()

    let dispatch = useDispatch()
    const {page: pageManga} = useSelector(store => store.chapters)
    const {next_chapter, title, order, page: globalPage, pages, chapter_id: globalChapter_id, manga_id} = useSelector(store => store.read)
    let navigate = useNavigate()
    useEffect(() => {
        if(parseInt(page) !== globalPage ){
            dispatch(set_page({
                page: parseInt(page),
                chapter_id
            }))
        }
        if(chapter_id !== globalChapter_id){
            navigate(`/read/${chapter_id}/1`)
            dispatch(get_pages({chapter_id}))
        }
    },[page, chapter_id])


    

    function handleNextClick(){
        if((parseInt(page) + 1) > pages.length){
            navigate(`/read/${next_chapter}/1`)
        }else{
            navigate(`/read/${chapter_id}/${parseInt(page) + 1}`)
        }     
    }
    function handlePrevClick(){
        if((parseInt(page) - 1) <= 0 ){
            navigate(`/manga/${manga_id}/chapters/${pageManga}`)
        }else{
            navigate(`/read/${chapter_id}/${parseInt(page) - 1}`)
        }
    }
    return (
        <div className="w-full min-h-screen h-full flex flex-col justify-start items-center">
            <div className="w-full h-[70px] bg-[#4338CA] text-white text-xl text-center flex flex-row items-center justify-center">{order} - {title}</div>
            <div className="flex flex-col grow relative">
                <button onClick={handlePrevClick} className="absolute top-0 left-0 bottom-0 w-1/2"></button>
                <button onClick={handleNextClick} className="absolute top-0 right-0 bottom-0 w-1/2"></button>
                {pages && <img className="image-container w-screen max-w-[428px]" src={pages[globalPage - 1]} alt="" />}
                
            </div>
            <div className="w-full h-[40px] bg-[#4338CA]"></div>
        </div>
    )
}