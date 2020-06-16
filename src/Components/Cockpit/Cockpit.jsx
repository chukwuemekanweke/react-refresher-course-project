import React, { Fragment } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let btnClass = "";
  let buttonText = "Show Persons";

  if (props.showPersons) {
    btnClass = classes.Red;
    buttonText = "Switch Net Worth";
  }

  let assignedClasses = [];

  if (props.persons.length <= 2) assignedClasses.push(classes.red);

  if (props.persons.length <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>

      <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
      <p className={assignedClasses.join(" ")}>
        Building World Class Solutions that Solve Real Life Problems
      </p>
      <br></br>
      <button className={btnClass} onClick={props.click}>
        {buttonText}
      </button>
    </div>
  );
};

export const Cockpit = cockpit;
