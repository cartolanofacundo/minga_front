import { Link as Anchor } from "react-router-dom"
export function ChapterCard({chapter}) {
    return (
        <div className="w-full flex flex-row justify-between">
            <img src={chapter.cover_photo} alt="" className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex flex-col justify-between items-center text-center p-2 self-stretch">
                <p className="text-1xl font-poppins">{chapter.title}</p>
                <div className="flex flex-row">
                    comments
                </div>
            </div>
            <Anchor to={`/chapters/${chapter._id}/0`} className="bg-[#4338CA] self-center text-white py-4 px-8 rounded-full font-poppins font-semibold">
                READ
            </Anchor>
        </div>
    )
}