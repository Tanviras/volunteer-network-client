import React, { useContext } from 'react';
import logo from '../../logos/Group-1329.png';
import googleLogo from '../../logos/google.jpg';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from "./firebase.config";




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      const handleGoogleSignIn = () => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      };

    return (
        <div className='loginWholeDiv'>
            <div> 
            <img src={logo} alt='logo' className='imgSize'></img>
            </div>

           <div className='loginBox'>
           <h2> Login With</h2>

           <div className='googleBox' onClick={handleGoogleSignIn}>
              <img src={googleLogo} alt='googleLogo' className='googleLogo'/>
               <span className='writing'>Continue with Google</span>
           </div>

           </div>
        </div>
    );
};

export default Login;