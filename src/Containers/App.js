import React, { Fragment, Component } from "react";
// import logo from './logo.svg';
import classes from "./App.css";
import styled from "styled-components";
import { Person } from "../Components/Persons/Person/index";
import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";
import { Persons } from "../Components/Persons/index";
import { Cockpit } from "../Components/Cockpit/Cockpit";
import { WithClass } from "../Hoc/WithClass";
import { WithClass2 } from "../Hoc/WithClass2";
import AuthContext from "../Context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { id: "cabasa", name: "Chidelu", netWorth: 0 },
      { id: "casablanca", name: "Onyeka", netWorth: 0 },
      { id: "bianca", name: "Ugochukwu", netWorth: 0 },
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  switchNetWorthHandler = () => {
    this.setState({
      persons: [
        {
          id: "cabasa",
          name: "Chidelu",
          netWorth: this.generateNetWorth(),
        },
        { id: "casablanca", name: "Onyeka", netWorth: this.generateNetWorth() },
        { id: "bianca", name: "Ugochukwu", netWorth: this.generateNetWorth() },
      ],
      showPersons: true,
    });
  };

  husltleForNetworthHandler = (position) => {
    let persons = this.state.persons.map((person, index) => {
      if (position === index) person.netWorth = this.generateNetWorth();
      return person;
    });

    this.setState({
      persons: persons,
    });
  };

  nameChangeHandler = (position, event) => {
    let persons = [...this.state.persons];

    persons = persons.map((person, index) => {
      if (position === index) person.name = event.target.value;
      return person;
    });

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (position, event) => {
    const persons = this.state.persons.slice();
    //const persons = [...this.state.persons]
    persons.splice(position, 1);

    this.setState({
      persons: persons,
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  generateNetWorth = () => {
    return this.currencyFormat(Math.random() * 10000000000);
  };
  currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deletePerson={(index) => this.deletePersonHandler(index)}
          nameChange={(index, event) => this.nameChangeHandler(index, event)}
          hustleForNetworth={(index) => this.husltleForNetworthHandler(index)}
        ></Persons>
      );
    }

    return (
      <ErrorBoundary>
        <WithClass classes={classes.App}>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>

          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler,
            }}
          >
            {this.state.showCockpit && (
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                click={this.switchNetWorthHandler.bind(this)}
              />
            )}

            <br></br>
            {persons}
          </AuthContext.Provider>
        </WithClass>{" "}
      </ErrorBoundary>

      //React.createElement('div',{className:'App'}, React.createElement('h1',null,"Damn, i just learnt something new"))
    );
  }
}

export default WithClass2(App, "row");
