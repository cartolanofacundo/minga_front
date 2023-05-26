import { DonateCard } from "../../components/donate/DonateCard"
export function Donate() {
    let donations = [
        {
            title: "Small donor",
            description: "Make a difference with your donation. Every amount counts!",
            price: 1000,
            image: "https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/logo_footer.png?raw=true"
        },
        {
            title: "Major Donor",
            description: "Create lasting impact with a significant contribution.",
            price: 5000,
            image: "https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/logo_footer.png?raw=true"
        },
        {
            title: "Corporate Sponsor",
            description: "Partner with us to make a difference through corporate.",
            price: 10000,
            image: "https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/logo_footer.png?raw=true"
        }
    ]
    return (
        <div className="w-full h-screen flex flex-col justify-start pt-[100px] lg:pt-[90px] lg:justify-center items-center p-4">
            <div className="absolute bg-[#4338CA] top-0 left-0 right-0 h-[70px]"></div>
            <h3 className="text-2xl text-[#4338CA]  font-regular font-poppins">Donate</h3>
            <h1 className="text-4xl font-poppins text-center lg:text-start font-bold text-[#101827]">Your Donation Keeps Us Going</h1>
            <p className="w-full lg:w-1/2 mt-4 lg:mt-8 text-[#4d5562] font-poppins text-xl text-center">At Minga, we are committed to providing a valuable online platform for our users. Maintaining and improving our website requires continuous effort and resources. </p>
            <div className="w-full flex flex-col lg:flex-row gap-4 p-2 mt-8 lg:mt-20 pb-20">
                {donations.map((item) => <DonateCard key={item.price} donation={item}/>)}
            </div>
            
        </div>

    )
}