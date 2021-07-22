import React from "react";

import { Button, Card, Space } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';
import { auth, googleProvider } from '../services/FirebaseService';

import './Login.css';

function Login() {
    const googleSignIn = e => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                /*FOR FUTURE REFERENCE
                // var credential = result.credential;
                // var token = credential.accessToken;
                */
                var user = result.user;
                console.log(user.email, user.displayName);
            }).catch((error) => {
                /* FOR FURTHER TESTING
                // var errorCode = error.code;
                //  var email = error.email;
                */
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div className="Login">
            <Card className="Login-card">
                <p className="Login-welcomeback">
                    Welcome Back!
                </p>
                <Space>
                    <Button onClick={googleSignIn} className="Login-google" type="dashed">
                        <GoogleCircleFilled className="Login-margin" />
                        Sign in with Google
                    </Button>
                </Space>
            </Card>
        </div>
    );

}
export default Login