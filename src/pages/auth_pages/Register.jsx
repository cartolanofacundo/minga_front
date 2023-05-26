import { UserIcon, EmailIcon, CameraIcon, LockIcon } from "../../assets/icons/Icons";
import sign_up_image from "../../assets/images/sign_up_image.png"
import { Input } from "../../components/auth/Input";
import { useSelector, useDispatch } from "react-redux"
import { ActionButton } from "../../components/auth/ActionButton"
import { Link as Anchor, useNavigate } from "react-router-dom";
import actions from "../../store/user/authActions"
import { parseDataFromForm } from "../../utils/utils";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import singnupActions from '../../store/user/googleActions.js'
const { sing_up_google } = singnupActions

//GoogleAuth
import Google from "./Google";

const { sign_up, clean_up } = actions;
export function Register() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    let { error, success, google } = useSelector(store => store.user);
    useEffect(() => {
        dispatch(clean_up());

        return () => {
            dispatch(clean_up())
        }
    }, [])

    useEffect(() => {
        if (error?.userExist) {
            toast.error("User already exists")
            setTimeout(() => navigate("/login"), 1500)

        }
        if (success) {
            toast.success("account created")
            if (google) {
                setTimeout(() => navigate("/"), 1500)
            } else {
                setTimeout(() => navigate("/verify"), 1500)
            }

        }


    }, [success, error, google])

    function handleSubmit(e) {
        let { data } = parseDataFromForm(e)
        dispatch(sign_up({ data }));
    }
    return (
        <>
            <div className="h-screen w-full flex flex-row justify-center relative">
                <div className="w-full lg:w-[50vw] h-screen flex flex-col justify-center items-center">
                    <div className="absolute top-0 h-[70px] bg-[#4338CA] w-full self-start"></div>
                    <form action="post" onSubmit={handleSubmit} className="w-full h-full p-4 lg:p-0 lg:w-1/2 lg:h-3/4 flex flex-col gap-2 justify-center mt-[70px] items-center">
                        <Input error={error?.name} icon={<UserIcon />} placeholder={"Insert your name"} name={"name"} type={"text"} />
                        <Input error={error?.last_name} icon={<UserIcon />} placeholder={"Insert your last name"} name={"last_name"} type={"text"} />
                        <Input error={error?.email} icon={<EmailIcon />} placeholder={"Insert your email"} name={"email"} type={"text"} />
                        <Input error={error?.photo} icon={<CameraIcon />} placeholder={"Insert your photo"} name={"photo"} type={"text"} />
                        <Input error={error?.password} icon={<LockIcon />} placeholder={"****************"} name={"password"} type={"password"} />
                        <ActionButton>
                            Sign up
                        </ActionButton>
                        <Google action={sing_up_google}/>
                        <p className="font-medium font-roboto">You have an account <Anchor to={"/login"} className="text-[#4338CA]">Sign in</Anchor> </p>
                    </form>
                </div>
                <figure className="w-[50vw] h-screen hidden lg:block">
                    <img className="w-full h-full" src={sign_up_image} alt="sign in image" />
                </figure>
            </div>
        </>
    )
}