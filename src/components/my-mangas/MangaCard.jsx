import { Link as Anchor } from "react-router-dom"
import { PencilIcon, PlusIcon } from "../../assets/icons/Icons"

export function MangaCard({ manga }) {
    return (
        <div key={manga._id} className="w-full flex flex-row h-[200px] shadow rounded-lg justify-between items-center sm:w-5/12 overflow-hidden">
            <div className="border-l-4 h-2/3" style={{ borderColor: manga?.category_id?.color }}></div>
            <div className="flex flex-col items-start justify-between h-full grow p-4">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <Anchor to={`/chapter-form/${manga._id}`}><PlusIcon /></Anchor>
                    <Anchor to={`/edit/${manga._id}`}><PencilIcon /></Anchor>
                </div>
                <div>
                    <p className="font-roboto font-medium text-[#222222] text-2xl">{manga.title}</p>
                    <p style={{ color: manga?.category_id?.color }}>{manga.category_id.name}</p>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="py-2 px-4 rounded-full font-bold" style={{ backgroundColor: manga.category_id.hover, color: manga.category_id.color }}>Edit</button>
                    <button className="bg-[#FBDDDC] p-2 rounded-full font-bold text-[#EE8380]">Remove</button>
                </div>

            </div>

            <img src={manga.cover_photo} className="mr-[-50px] h-[300px] w-[200px] sm:w-[250px] object-cover rounded-[100%]" alt="" />
        </div>
    )
}