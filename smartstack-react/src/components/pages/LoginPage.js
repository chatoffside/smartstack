import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import Header from './Header';

const LoginPage = () => (
    <div>
        <Header/>

        <div className="main-container">
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/login">Login</Link>
            <LoginForm/>
        </div>
    </div>
);
export default LoginPage;