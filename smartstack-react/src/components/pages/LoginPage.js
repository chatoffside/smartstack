import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
    <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/login">Login</Link>
        <div className="main-container">
            <h1>Bid for the property you wish to invest in and earn ROI in Ether</h1>
            <div className="block">
               <h4>Timer:</h4> &nbsp;
               <span> this.state.timer</span>
            </div>
            <div className="block">
               <h4>Last winner:</h4> &nbsp;
               <span>this.state.lastWinner</span>
            </div>
            <hr/>
            <h2>Vote for the next number</h2>
            <ul>
               <li onClick={() => {this.voteNumber(1)}}>1</li>
               <li onClick={() => {this.voteNumber(2)}}>2</li>
               <li onClick={() => {this.voteNumber(3)}}>3</li>
               <li onClick={() => {this.voteNumber(4)}}>4</li>
               <li onClick={() => {this.voteNumber(5)}}>5</li>
               <li onClick={() => {this.voteNumber(6)}}>6</li>
               <li onClick={() => {this.voteNumber(7)}}>7</li>
               <li onClick={() => {this.voteNumber(8)}}>8</li>
               <li onClick={() => {this.voteNumber(9)}}>9</li>
               <li onClick={() => {this.voteNumber(10)}}>10</li>
            </ul>
        </div>
    </div>
);
export default LoginPage;