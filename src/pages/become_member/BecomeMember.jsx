import { useState } from "react"
import { CheckIcon, ChevronRight } from "../../assets/icons/Icons"
import become_photo from "../../assets/images/become_photo.png"
import people_author from "../../assets/images/people_author.png"
import people_cia from "../../assets/images/people_cia.png"
import { useNavigate } from "react-router-dom"

export function BecomeMember() {
    const navigate = useNavigate()
    function handleNavigate(){
        if(selected === "author"){
            navigate("./author-form")
        }else if(selected === "company"){
            navigate("./cia-form")
        }
    }
    const [selected, setSelected] = useState(null)
    return (
        <div className="flex flex-row w-screen h-screen justify-center items-center">
            <div className="absolute top-0 left-0 right-0 h-[70px] bg-[#4338CA] z-10"></div>
            <div className="w-[100vw] h-5/6 lg:w-[50vw] flex flex-col justify-center items-center p-4">
                <div className="w-full h-full lg:w-3/4 lg:h-1/2 flex flex-col gap-8 justify-center items-center">
                    <h3 className="font-roboto text-[#4338CA] text-xl">Change to role</h3>
                    <button onClick={() => setSelected("author")} className="flex flex-row items-center gap-4 p-4 justify-start rounded-lg border-[1px] boder-[#E5E5E5] w-full relative z-10" style={{borderColor: selected === "author" && "#4338CA"}}>
                        <img src={people_author} alt="people" />
                        <div className="font-roboto text-[#4338CA] text-lg text-start">
                            <p className="font-medium">Join as an Author!</p>
                            <p className="font-light text-sm">Im a reader writting a manga</p>
                        </div>
                        {selected === "author" ?
                            <div className="absolute h-[20px] w-[20px] border-[1px] border-[#4338CA] rounded-full top-2 right-2 flex flex-row justify-center items-center text-white bg-[#4338CA]"><CheckIcon /></div>
                            :
                            <div className="absolute h-[20px] w-[20px] border-[1px] rounded-full top-2 right-2"></div>
                        }

                    </button>
                    <button onClick={() => setSelected("company")} className="flex flex-row items-center gap-4 p-4 justify-start rounded-lg border-[1px] boder-[#E5E5E5] w-full relative z-10" style={{borderColor: selected === "company" && "#4338CA"}}>
                        <img src={people_cia} alt="people" />
                        <div className="font-roboto text-[#4338CA] text-lg text-start">
                            <p className="font-medium">Join as a Company!</p>
                            <p className="font-light text-sm">Im a company</p>
                        </div>
                        {selected === "company" ?
                            <div className="absolute h-[20px] w-[20px] border-[1px] border-[#4338CA] rounded-full top-2 right-2 flex flex-row justify-center items-center text-white bg-[#4338CA]"><CheckIcon /></div>
                            :
                            <div className="absolute h-[20px] w-[20px] border-[1px] rounded-full top-2 right-2"></div>
                        }

                    </button>
                    {selected &&
                        <button onClick={handleNavigate} className="py-2 rounded-lg bg-[#4338CA] w-3/4 px-4 text-white font-roboto hover:opacity-90 flex flex-row justify-between">{selected === "company" ? "Join as a Company" : "Join as an Author"} <span className="text-white"><ChevronRight /></span></button>
                    }
                </div>


            </div>
            <div className="hidden lg:block lg:min-w-[50vw] relative z-0">
                <div className="absolute top-28 left-10 z-10 w-[500px]">
                    <p className="font-poppins text-white text-3xl">Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                    <p className="font-poppins text-white text-sm font-light mt-8">- Ignacio Bro raz</p>
                </div>

                <img className="max-h-screen w-full object-cover" src={become_photo} alt="become-member cover photo" />
            </div>

        </div>
    )
}