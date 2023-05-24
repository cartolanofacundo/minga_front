import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import singnupActions from '../../store/singupgoogle/singnupAction.js'
const {singUpgoogle} = singnupActions


export default function Google() {
    const navigate = useNavigate()
    //REDUX
    let user = useSelector(store => store.userupgoogle)
    console.log(user)
    let dispatch = useDispatch()
    function singUp(credential) {
        dispatch(singUpgoogle({ credential }))

    }
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    singUp(credentialResponse.credential)
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                    toast.success('User Created!')
                }}
                onError={() => {
                    console.log('User Created!');
                }}
            />
        </GoogleOAuthProvider>
    )
}