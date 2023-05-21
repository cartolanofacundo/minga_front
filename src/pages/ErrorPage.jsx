import { Link } from "react-router-dom";

export function ErrorPage(){
    //todo error
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#4338CA] text-white">
            <p className="font-poppins font-bold text-9xl ">404</p>
            <h1 className="font-poppins font-medium text-4xl">The page you’re looking for <br /> can’t be found.</h1>
            <Link to={"/"} className="text-2xl mt-48 underline" >Go to home page</Link>
        </div>
    )
}