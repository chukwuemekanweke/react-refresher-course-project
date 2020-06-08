import React, { Fragment } from 'react';
export const Person = (props) => {
    return (
        <Fragment>
            <p>As a nwa igbo, i'm not just a person. I'm a rich person.</p>
            <p>My name is {props.name}</p>
            <p>My networth is {props.netWorth}</p>
            <p>{props.children}</p>
        </Fragment>

    );
}

