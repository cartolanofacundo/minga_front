import { useEffect } from "react"
import { Pagination } from "../../../components/pagination/Pagination"
import { ChapterCard } from "../../../components/manga-details/ChapterCard"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../../store/chapters/chaptersActions"
import { SkeletonMap } from "../../../components/manga-details/SkeletonMap"

const { get_all_from_manga } = actions
export function Chapters() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    let { manga_id: manga_id_url, chapterpage } = useParams()
    let { manga_id, page, chapters, pages, loading } = useSelector(store => store.chapters)
    useEffect(() => {
        if (pages && (chapterpage > pages.length || chapterpage <= 0)) {
            navigate(`/manga/${manga_id_url}/chapters/1`)
        }
        if (manga_id !== manga_id_url) {
            navigate(`/manga/${manga_id_url}/chapters/1`)
            dispatch(get_all_from_manga({
                manga_id: manga_id_url,
                page: 1,
                path: "/explore-manga"
            }))
        }
        if (chapterpage !== page) {
            console.log("page distinta")
            dispatch(get_all_from_manga({
                manga_id: manga_id_url,
                page: chapterpage,
                path: "/explore-manga"
            }))
        }
    }, [chapterpage, manga_id_url, pages])
    return (
        <>
            <div className="flex flex-col gap-y-4">
                {
                    loading ?
                        <SkeletonMap />
                        : <>

                            {chapters?.map((chap) => {
                                return <ChapterCard key={chap._id} chapter={chap} />
                            })}
                        </>
                }
                <Pagination pages={pages} path={`/manga/${manga_id}/chapters`} page={chapterpage} />

            </div>

        </>
    )
}