import { useSelector } from "react-redux"
import {Link as Anchor} from "react-router-dom"
export function UserInfo() {
    let { token, user } = useSelector(store => store.user)
    return (
        <>
            {
                token && <Anchor to={`/profile/user/${user._id}`} className="w-full flex flex-row justify-start items-center gap-4">
                    <figure>
                        <img className="w-14 h-14 object-cover rounded-full items-center justify-between" src={user?.photo} alt="" />
                    </figure>
                    <div className="text-white font-roboto">
                        <p className="font-bold">{user?.name} {user?.last_name}</p>
                        <p className="font-light text-sm">{user?.email}</p>
                    </div>
                </Anchor>
            }
        </>
    )
}