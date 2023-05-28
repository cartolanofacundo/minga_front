import { useSelector } from "react-redux"
import { MangaCard } from "./MangaCard"
import { NothingToShow } from "./NothingToShow"

export function MangasMap() {
    let { mangas } = useSelector(store => store.mangas)
    return (
        <>
        <div className="grow flex flex-row gap-x-14 gap-y-4 flex-wrap m-auto w-full justify-center mt-8">
            {
            mangas?.length > 0 ?
            mangas?.map((manga) => {
                return <MangaCard key={manga._id} manga={manga} />
            }) : <NothingToShow/>}
        </div>
        </>
        
    )

}