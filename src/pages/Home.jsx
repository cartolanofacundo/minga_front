import { Carousel } from "../components/Home/Carousel"
import { Hero } from "../components/Home/Hero"
import { useMediaQuery } from "react-responsive"

export function Home() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    return (
        <div className="grow w-full h-screen">
            <Hero/>
            {isDesktop && <Carousel/> }
        </div>
    )
}