import { Link as Anchor } from "react-router-dom"
export function ChapterCard() {
    return (
        <div className="w-full flex flex-row justify-between">
            <img src="https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg" alt="" className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex flex-col justify-between items-center text-center p-2 self-stretch">
                <p className="text-1xl font-poppins">Welcome - part 1</p>
                <div className="flex flex-row">
                    comments
                </div>
            </div>
            <Anchor to={`/chapters/sarasa/0`} className="bg-[#4338CA] self-center text-white py-4 px-8 rounded-full font-poppins font-semibold">
                READ
            </Anchor>
        </div>
    )
}