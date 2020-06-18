import React, { Fragment, useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../Context/auth-context";

const cockpit = (props) => {
  const toggleButtonRef = useRef();
  const authContext = useContext(AuthContext);

  console.log("[Cockpit.jsx] Authenticated: ", authContext.authenticated);

  useEffect(() => {
    toggleButtonRef.current.click();

    console.log("[Cockpit.js] useEffect");

    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => console.log("[Cockpit.js] Cleanup work in 2nd useEffect");
  }, [props.personsLength]);

  useEffect(() => {
    console.log("[Cockpit.js] 3rd useEffect");
    return () => console.log("[Cockpit.js] Cleanup work in 3rd useEffect");
  });

  let btnClass = "";
  let buttonText = "Show Persons";

  if (props.showPersons) {
    btnClass = classes.Red;
    buttonText = "Switch Net Worth";
  }

  let assignedClasses = [];

  if (props.personsLength <= 2) assignedClasses.push(classes.red);

  if (props.personsLength <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>

      <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
      <p className={assignedClasses.join(" ")}>
        Building World Class Solutions that Solve Real Life Problems
      </p>
      <br></br>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.click}>
        {buttonText}
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export const Cockpit = React.memo(cockpit);
