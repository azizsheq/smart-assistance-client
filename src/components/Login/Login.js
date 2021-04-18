import './Login.css';
import { UserContext } from '../../App';
import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';


// conditional initalizing of firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        image: '',
        error: '',
        success: false
    });

    // setting useContext value
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    function handleClickBackHome() {
        history.push("/home");
    }


    //
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            // Send token to your backend via HTTPS
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    };
    
    // to create an instance of the Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();

    // handel google sign in
    const handleGoogleSignIn = () => {
        // console.log("Google sign in clicked");
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                var user = result.user;
                // console.log(user);
                const { displayName, email, photoURL } = user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    image: photoURL,
                    error: '',
                    success: true
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                setUserToken();
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Google Sign in error : ", errorCode, errorMessage);
            });
    }


    const handleSignOut = () => {
        console.log("Sign out clicked");
        firebase.auth()
            .signOut().then(() => {
                // Sign-out successful.
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    image: ''
                }
                setUser(signedOutUser);
                setLoggedInUser({});
                sessionStorage.removeItem('token');
            }).catch((error) => {
                // An error happened.
                // console.log("Sign out error : ", error);
            });
    }


    return (
        <main className="d-flex loginMain">
            <div className="loginDiv">
                <p>Welcome to Smart Assistance</p>
                <p>Login Here</p>

                {
                    loggedInUser.email ?
                        <Button variant="primary" size="lg" onClick={handleSignOut}>Sign Out</Button>
                        : <Button variant="primary" size="lg" onClick={handleGoogleSignIn}>
                            Continue with &nbsp; <FontAwesomeIcon icon={faGoogle} />
                        </Button>
                }

                <p></p>

                <Button variant="primary" size="lg" block disabled>
                    Continue with &nbsp; <FontAwesomeIcon icon={faFacebook} />
                </Button>

                <p></p>
                {/* to display error to user  */}
                <p className="error" style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p className="error" style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>
                }
                <p></p>

                <Button onClick={handleClickBackHome}>Back to Home</Button>

            </div>

        </main>
    );
};

export default Login;