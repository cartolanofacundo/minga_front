import { useEffect, useState } from "react"
import { ShieldIcon } from "../../assets/icons/Icons"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/user/authActions"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const {clean_up, verify_code} = actions
export function VerifyCode() {
    let navigate = useNavigate()
    const {error, verify} = useSelector(store => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clean_up())
        return () => {
            dispatch(clean_up())
        }
    }, [])

    useEffect(() => {
        if(error?.verifyFailed){
            toast.error(error.verifyFailed);
            toast.error("please re-enter the code or click resend code")
        }
        if(verify){
            toast.success("Your account was verified")
            setTimeout(() =>toast.success("please go to login page"), 500 )
            setTimeout(navigate("/login"), 2000 )
            
        }
    },[error, verify])
    const [verifyCode, setVerifyCode] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        let data = verifyCode
        dispatch(verify_code({data}))
    }
    return (
        <div className="w-full h-screen bg-[#4338CA] flex flex-col justify-start items-center pt-[70px]">
            <div className="flex flex-col sm:w-full lg:w-2/6 p-4 justify-between items-center">
                <span className="text-white mb-2"><ShieldIcon /></span>
                <h1 className="text-white text-3xl font-roboto font-medium text-center mb-8">Authenticate your account</h1>
                <p className="font-roboto text-white text-lg text-center">Protecting your information is our top priority. Please confirm your account by entering de authorization code sent to your email.</p>
                <form onSubmit={handleSubmit}>
                    <input className="w-full my-8 text-[#4338CA] text-3xl text-center focus-visible:outline-none" type="text" name="verifycode" value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)}  />
                    <div className="flex flex-row justify-between w-full gap-8">
                        <p className="text-sm text-white font-roboto">It may take a minute to receive your code. <br /> havent received it? <button className="text-white underline">Resend a new code</button></p>
                        <button className="bg-white p-2 rounded-lg font-roboto font-medium text-[#4338CA] hover:opacity-90">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}