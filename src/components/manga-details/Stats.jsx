export function Stats() {
    return (
        <div className="w-full rounded-lg flex shadow-lg flex-row bg-white justify-between p-6 items-center">
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-roboto">4.5/5</p>
                <p className="text-[12px] text-[#9D9D9D]">rating</p>
            </div>
            <div className="w-[1px] h-9 bg-[#9D9D9D]"></div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-roboto">265</p>
                <p className="text-[12px] text-[#9D9D9D]">chapters</p>
            </div>
            <div className="w-[1px] h-9 bg-[#9D9D9D]"></div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-roboto">Eng</p>
                <p className="text-[12px] text-[#9D9D9D]">Language</p>
            </div>

        </div>
    )
}