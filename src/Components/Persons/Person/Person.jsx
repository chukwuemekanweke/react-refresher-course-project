import React, { Component } from "react";
import classes from "./Person.css";

export class Person extends Component {
  render() {
    console.log("[Person.jsx] rendering...");
    return (
      <div className={classes.Person}>
        <p>As a nwa igbo, i'm not just a person. I'm a rich person.</p>
        <p>My name is {this.props.name}</p>
        <p>My networth is {this.props.netWorth}</p>
        <input
          type="text"
          onChange={this.props.changed}
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
