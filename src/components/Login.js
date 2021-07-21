import './Login.css';
import React from "react";
import { Button, Card, Space } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';
import firebase from 'firebase';
import { auth } from '../../fire';

export class Login extends React.Component {
   
    render() {
        const googleSignIn = e=>{
            e.preventDefault();
            var provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
            .then((result) =>{
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
                // The firebase.auth.AuthCredential type that was used.
                //  var credential = error.credential;*/
                var errorMessage = error.message;
            
                console.log(errorMessage);
            });
            
        }
        return (
            <div className="Login">
                <Card style={{ width: 280, height: 200, boxShadow: "0px 0px 2px 2px rgba(208, 216, 243, 0.6)" }} className="Login-card">
                    <p className="Login-welcomeback">
                        Welcome Back!
                    </p>
                    <Space>
                        <Button onClick = {googleSignIn} className="Login-google" type="dashed">
                            <GoogleCircleFilled className="Login-margin"/>
                            Sign in with Google
                        </Button>
                    </Space>
              
                </Card>
            </div>
        );
    }
}