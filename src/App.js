import React from 'react';
import logo from './logo.svg';
import './App.css';
import './task1.css';

const App = () => (<div className="main">
    Hello World from <strong>Abdul Basit</strong>
    <h3>Courses Offered By PIAIC</h3>
    <ul>
        <li>BCC</li>
        <li>CNC</li>
        <li>IOT</li>
        <li>AIC</li>
    </ul>
    <br/>
    <h3>
        My Favourite Sports
    </h3>
    <ol className="list">
        <li>Cricket</li>
        <li>Foot Ball</li>
        <li>Table Tennis</li>
    </ol>
    <br/>
    <p>
        This sum is creted using JSX in react 5 + 5 =<i> {5+5} </i>
    </p>
</div>)

export default App;