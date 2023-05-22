import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/user/authActions"

const {sign_out} = actions;
export function Logout() {
    let { token } = useSelector(store => store.user)
    let dispatch = useDispatch()
    function handleLogout(){
        dispatch(sign_out())
    }
    return (
        <>
            {
                token &&
                <button onClick={handleLogout} className="w-full text-white font-bold font-roboto border-t-[1px] border-t-white p-4 hover:opacity-80">
                    Log out
                </button>
            }
        </>
    )
}