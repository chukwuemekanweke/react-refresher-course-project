import React, { Fragment, Component } from "react";
import { Person } from "./Person/index";

export class Persons extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return prevState;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");

    if (nextProps.persons !== this.props.persons) return true;
    else return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[Persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    //for cleanup work
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.jsx] rendering...");
    return this.props.persons.map((person, index) => (
      <Fragment key={person.id}>
        <Person
          forget={this.props.deletePerson.bind(this, index)}
          changed={this.props.nameChange.bind(this, index)}
          click={this.props.hustleForNetworth.bind(this, index)}
          name={person.name}
          netWorth={person.netWorth}
        />
        <br></br>
      </Fragment>
    ));
  }
}
