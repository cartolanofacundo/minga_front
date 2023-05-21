import sign_in_image from "../../assets/images/sign_in_image.png"
import { Input } from "../../components/auth/Input"
import { Error } from "../../components/auth/Error"
import { AtSimbol, EmailIcon } from "../../assets/icons/Icons"
import { ActionButton } from "../../components/auth/ActionButton"
import { parseDataFromForm } from "../../utils/utils"
import { useDispatch, useSelector } from "react-redux"
import actions from "../../store/user/authActions"
import { toast, Toaster } from "react-hot-toast"

const { sign_in } = actions
export function Login() {
    const { error, success } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    function handleSubmit(e) {
        let { data } = parseDataFromForm(e)
        dispatch(sign_in({ data }));
        //todo navigate
    }
    console.log(error);
    return (
        <>
            <Toaster />
            <div className="h-screen w-full flex flex-row justify-center relative">

                <figure className="w-[50vw] h-screen hidden lg:block">
                    <img className="w-full h-full" src={sign_in_image} alt="sign in image" />
                </figure>
                <div className="w-full lg:w-[50vw] h-screen flex flex-col justify-center items-center">
                    <div className="lg:hidden absolute top-0 h-[70px] bg-[#4338CA] w-full self-start"></div>
                    <form action="post" onSubmit={handleSubmit} className="w-full p-4 lg:p-0 lg:w-1/2 lg:h-1/2 flex flex-col gap-4 items-center">
                        <h2 className="text-4xl font-roboto font-bold ">Welcome <span className="text-[#4338CA]">back</span>!</h2>
                        <p className="text-[#1F1F1FBF] font-roboto text-center">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                        <Error error={error?.credentials} />
                        <Input error={error?.email} icon={<EmailIcon />} placeholder={"Insert your email"} name={"email"} type={"email"} />
                        <Input error={error?.password} icon={<AtSimbol />} placeholder={"*********"} name={"password"} type={"password"} />
                        <ActionButton>
                            Sign in
                        </ActionButton>
                        <p className="font-medium font-roboto">You don't have an account yet? <a href="" className="text-[#4338CA]">Sign up</a> </p>
                        <p className="font-medium font-roboto">Go back to  <a href="" className="text-[#4338CA]">home page</a> </p>
                    </form>
                </div>
            </div>
        </>
    )
}