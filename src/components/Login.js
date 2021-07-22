import React from "react";
import './Login.css';
import { Button, Card, Space } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';

export class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <Card style={{ width: 280, height: 200, boxShadow: "0px 0px 2px 2px rgba(208, 216, 243, 0.6)" }} className="Login-card">
                    <p className="Login-welcomeback">
                        Welcome Back!
                    </p>
                    <Space>
                        <Button className="Login-google" type="dashed">
                            <GoogleCircleFilled className="Login-margin"/>
                            Sign in with Google
                        </Button>
                    </Space>
                </Card>
            </div>
        );
    }
}