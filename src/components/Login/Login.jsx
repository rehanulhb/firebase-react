import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log('', error.message)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} alt="" />
                <h4>Updated Login info</h4>
            </div>}
        </div>
    );
};

export default Login;