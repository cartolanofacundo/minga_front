import axios from "axios"
import { apiUrl } from "../../utils/api"
import { Heart } from "../../assets/icons/Icons"

export function DonateCard({ donation }) {
    function handleSubmit(item) {
        axios.post(apiUrl + "payments", item)
            .then((res) => (window.location.href = res.data.response.body.init_point))
            .catch((error) => console.log(error))
    }
    return (
        <div className="card w-full lg:1/3 border-[#B1B1B6] hover:border-[#4338CA] border-[0.5px] rounded-lg p-8 flex flex-col gap-4">
            <h2 className="font-poppins font-medium text-xl">{donation.title}</h2>
            <p className="font-poppins font-normal text-[#4d5562]">{donation.description}</p>
            <p className="font-poppins font-extrabold text-4xl"> ${donation.price}</p>
            <button onClick={() => { handleSubmit(donation) }} className=" bg-[#4338CA] flex justify-center items-center text-white p-2 rounded-xl font-popins font-normal text-xl">Donate <span className="heart text-[#4338ca]"><Heart /></span> </button>
        </div>
    )
}