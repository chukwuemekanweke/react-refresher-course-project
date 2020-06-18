import React, { Component, createRef, Fragment } from "react";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

export class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <div className={classes.Person}>
        <AuthContext.Consumer>
          {(context) => {
            console.log({ context });
            return context.authenticated ? (
              <p>Authenticated</p>
            ) : (
              <p>Please log in</p>
            );
          }}
        </AuthContext.Consumer>

        <p>As a nwa igbo, i'm not just a person. I'm a rich person.</p>
        <p>My name is {this.props.name}</p>
        <p>My networth is {this.props.netWorth}</p>
        <input
          type="text"
          onChange={this.props.changed}
          ref={this.inputElementRef}
          value={this.props.name}
        ></input>
        <br></br>
        <br></br>

        <button onClick={this.props.click}>Double Your Hustle</button>
        <br></br>
        <br></br>

        <button onClick={this.props.forget}>Forget Fellow Billionaire</button>

        <p>{this.props.children}</p>
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  netWorth: PropTypes.string,
};
