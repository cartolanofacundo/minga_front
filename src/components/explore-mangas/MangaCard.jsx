import { Link as Anchor } from "react-router-dom"

export function MangaCard({manga}) {
    return (
        <Anchor to={`/manga/${manga._id}/`} key={manga._id} className="w-full flex flex-row h-[200px] shadow rounded-lg justify-between items-center lg:w-1/3 overflow-hidden">
            <div className="border-l-4 h-2/3" style={{ borderColor: manga?.category_id?.color }}></div>
            <div className="flex flex-col items-start justify-center h-full grow p-4">
                <div>
                    <p className="font-roboto font-medium text-[#222222] text-2xl">{manga.title}</p>
                    <p style={{ color: manga?.category_id?.color }}>{manga.category_id.name}</p>
                </div>
            </div>

            <img src={manga.cover_photo} className="mr-[-50px] h-[300px] w-[200px] sm:w-[250px] object-cover rounded-[100%]" alt="" />
        </Anchor>
    )
}