export function Loading() {
    return (
        <div className="flex flex-col justify-center items-center gap-20 absolute top-0 left-0 right-0 bottom-0 bg-[#4338CA] z-50">
            <div className="animate-pulse ">
                <h1 className="text-8xl text-white font-poppins font-bold">Minga</h1>
                <p className="text-white text-4xl font-bold font-poppins text-center mt-20">Loading...</p>
            </div>
        </div>
    )
}