import { Carousel } from "../components/Home/Carousel"
import { Hero } from "../components/Home/Hero"

export function Home() {
    return (
        <div className="grow w-full h-screen">
            <Hero/>
            <Carousel/>
        </div>
    )
}