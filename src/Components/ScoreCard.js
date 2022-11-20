import React, { useState } from "react";
import league from '../assets/back.jpg'
import './style.css'

export default function ScoreCard() {
    const [Goals, setGoal] = useState(0);
    const [resetBtn, setresetBtn] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // function for incrementing goals
    let incrementCount = () => {
        if (Goals ===10){
            setresetBtn((status) => status=true);
        }else{
            setresetBtn((status) => status=false);
            setIsValid((status) => status=false);
            setGoal((Goals) => Goals + 1);
        }
    };


    // function for decrementing goals
    let decrementCount = () => {
        if (Goals ===0){
            setIsValid((status) => status=true);
        }else{
            setresetBtn((status) => status=false);
            setIsValid((status) => status=false);
            setGoal((Goals) => Goals - 1);
        }
           
    };

    // function for reseting goals
    let reset = () => {

            setresetBtn((status) => status=false);
            setIsValid((status) => status=false);
            setGoal((Goals) => Goals = 0);
    };

    return (
        <div className="scoreCard">
            <img src={league} alt="league"/>
            <h1>Goals:</h1>
            <h1>{Goals}</h1>
            <h3 style={{visibility: isValid ? 'visible' : 'hidden'}}>Goal cannot be negative</h3>
            <button onClick={decrementCount} >-</button>
            <button onClick={incrementCount} >+</button>
            <br/>
            <button className="reset" style={{visibility: resetBtn ? 'visible' : 'hidden'}} onClick={reset}>Go back to 0</button>
        </div>
    );
}