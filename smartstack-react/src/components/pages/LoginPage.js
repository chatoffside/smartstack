import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => (
    <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/login">Login</Link>
        <div className="main-container">
            <LoginForm/>
        </div>
    </div>
);
export default LoginPage;