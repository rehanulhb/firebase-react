import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log('Google Mama is calling')
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;