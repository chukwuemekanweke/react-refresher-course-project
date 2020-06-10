import React, { Fragment } from 'react';
import './Person.css'
export const Person = (props) => {
    return (
        <div className="Person">
            <p>As a nwa igbo, i'm not just a person. I'm a rich person.</p>
            <p>My name is {props.name}</p>
            <p>My networth is {props.netWorth}</p>
            <button onClick={props.click} >Double Your Hustle</button>
            <input type="text" onChange={props.changed} value={props.name}  ></input>
            <p>{props.children}</p>
        </div>

    );
}

