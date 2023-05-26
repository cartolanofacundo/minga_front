import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

export default function Google({action,}) {
    let dispatch = useDispatch()
    function handleClick(credential) {
        dispatch(action({ credential }))
    }
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                    handleClick(credentialResponse.credential)
                }}
                onError={() => {
                    console.log('Error server!');
                }}
            />
        </GoogleOAuthProvider>
    )
}