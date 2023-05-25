import { Pagination } from "../../../components/pagination/Pagination"
import { ChapterCard } from "./ChapterCard"
import { useParams } from "react-router-dom"
export function Chapters() {
    let {manga_id, chapterpage} = useParams()
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <ChapterCard />
                <ChapterCard />
                <ChapterCard />
                <ChapterCard />
                <Pagination pages={[1,2]} path={`/manga/${manga_id}/chapters`} page={chapterpage}/>
            </div>

        </>
    )
}