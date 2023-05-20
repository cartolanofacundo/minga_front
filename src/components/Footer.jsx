import { Heart } from "../assets/icons/Icons"
import footer_image from "../assets/images/footer_image.png"
import footer_logo from "../assets/images/footer_logo.png"

export function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center font-poppins ">
            <img className="w-full" src={footer_image} alt="footer image" />
            <div className="w-full sm:w-3/4 gap-4 px-4 my-4 sm:my-10 sm:border-b-[1px] sm:border-b-[#D5D8DC] flex  flex-col sm:flex-row justify-between items-center sm:pb-5">
                <nav className="flex flex-row gap-4 grow">
                    <a>Home</a>
                    <a>Mangas</a>
                </nav>
                <figure className="flex flex-row justify-center items-center grow">
                    <img src={footer_logo} alt="footer logo" />
                </figure>
                <div className="grow flex flex-row items-center justify-end">
                    <button className="rounded-lg bg-[#4338CA] w-full sm:w-1/2 p-2 flex flex-row justify-center items-center text-white"> <span className="mr-2">Donate</span>  <Heart /></button>
                </div>
            </div>
        </div>
    )
}