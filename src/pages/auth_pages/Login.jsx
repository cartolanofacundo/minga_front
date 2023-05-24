import sign_in_image from "../../assets/images/sign_in_image.png"
import { Input } from "../../components/auth/Input"
import { Error } from "../../components/auth/Error"
import { AtSimbol, EmailIcon } from "../../assets/icons/Icons"
import { ActionButton } from "../../components/auth/ActionButton"
import { parseDataFromForm } from "../../utils/utils"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/user/authActions"
import { Link as Anchor } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Google from "./Google"
import googleAction from '../../store/user/googleActions'
const { sign_in_google } = googleAction


const { sign_in, clean_up } = actions
export function Login() {
    let navigate = useNavigate()
    const { error, success, google } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clean_up())
        return () => {
            dispatch(clean_up())
        }
    }, [])

    useEffect(() => {
        if (error?.credentials) {
            if (google) {
                setTimeout(() => { navigate("/register") }, 1500)
                toast.error("User is not exist")
            } else {
                toast.error("Wrong credentials")
            }
        }
        if (error?.verify) {
            toast.error("You are not verify")
            setTimeout(() => toast.error("Please verify your email"), 300)

            setTimeout(() => { navigate("/verify") }, 1500)

        }
        if (success) {
            toast.success("Signed in")
            setTimeout(() => { navigate("/") })
        }

    }, [error, success])
    function handleSubmit(e) {
        let { data } = parseDataFromForm(e)
        dispatch(sign_in({ data }));
        //todo navigate
    }
    return (
        <>
            <div className="h-screen w-full flex flex-row justify-center relative">
                <figure className="w-[50vw] h-screen hidden lg:block">
                    <img className="w-full h-full" src={sign_in_image} alt="sign in image" />
                </figure>
                <div className="w-full lg:w-[50vw] h-screen flex flex-col justify-center items-center">
                    <div className="lg:hidden absolute top-0 h-[70px] bg-[#4338CA] w-full self-start"></div>
                    <form action="post" onSubmit={handleSubmit} className="w-full p-4 lg:p-0 lg:w-1/2 lg:h-1/2 flex flex-col gap-4 items-center">
                        <h2 className="text-4xl font-roboto font-bold ">Welcome <span className="text-[#4338CA]">back</span>!</h2>
                        <p className="text-[#1F1F1FBF] font-roboto text-center">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                        <Input error={error?.email} icon={<EmailIcon />} placeholder={"Insert your email"} name={"email"} type={"email"} />
                        <Input error={error?.password} icon={<AtSimbol />} placeholder={"*********"} name={"password"} type={"password"} />
                        <ActionButton>
                            Sign in
                        </ActionButton>
                        <Google action={sign_in_google} />
                        <p className="font-medium font-roboto">You dont have an account yet? <Anchor to={"/register"} className="text-[#4338CA]">Sign up</Anchor> </p>
                        <p className="font-medium font-roboto">Go back to  <Anchor to={"/"} className="text-[#4338CA]">home page</Anchor> </p>
                    </form>
                </div>
            </div>
        </>
    )
}