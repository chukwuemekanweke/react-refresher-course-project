import React from 'react';
import './Person.css'
import Radium, {StyleRoot} from 'radium';
const person = (props) => {


    const style = {
        '@media (min-width: 500px)':{
            width: '450px',

        }
    }

    return (
        <div className="Person" style={style}>
            <p>As a nwa igbo, i'm not just a person. I'm a rich person.</p>
            <p>My name is {props.name}</p>
            <p>My networth is {props.netWorth}</p>
            <input type="text" onChange={props.changed} value={props.name}  ></input>
            <br></br>
            <br></br>

            <button onClick={props.click} >Double Your Hustle</button>
            <br></br>
            <br></br>

            <button onClick={props.forget} >Forget Fellow Billionaire</button>

            <p>{props.children}</p>
        </div>

    );
}

export const Person =  Radium(person)