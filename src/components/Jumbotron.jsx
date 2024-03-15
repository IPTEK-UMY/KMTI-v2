import React from 'react';
import './Jumbotron.css'; 
import jumbotron from '../Assets/images/bg.png';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <img src={jumbotron} alt="Jumbotron Image" />
        </div>
    );
}

export default Jumbotron;
