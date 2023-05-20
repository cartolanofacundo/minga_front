export function Hero() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[100vh] lg:h-[60vh] bg-cover bg-top" style={{ backgroundImage: "url(../src/assets/images/hero_image.png)" }}>
            <section className="w-5/6 h-1/2 lg:w-3/4 lg:h-2/3 p-4 text-white flex flex-col justify-between items-center font-roboto">
                <h1 className="font-bold text-center text-3xl lg:text-5xl">Your favorite comic book store ✨</h1>
                <h3 className="text-1xl text-center lg:text-2xl sm:px-48">From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</h3>
                <button className="px-6 w-1/2 lg:w-1/6 py-2 bg-[#4338CA] rounded hover:opacity-95">Let’s go!</button>
            </section>

        </div>
    )
}