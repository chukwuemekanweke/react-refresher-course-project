import React from 'react';
import './Person.css'
import styled from 'styled-components'


const StyledDiv = styled.div `
    width:60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align:center ;
       
    '@media (min-width: 500px)':{
        width: '450px',

    }

    `;


export const Person = (props) => {


    const style = {
        '@media (min-width: 500px)':{
            width: '450px',

        }
    }

    

    return (
        <StyledDiv>
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
        </StyledDiv>
    );
}

