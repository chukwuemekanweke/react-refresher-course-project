import React, { Fragment } from "react";
import { Person } from "./Person/index";

const persons = (props) => {
  console.log("[Persons.jsx] rendering...");
  return props.persons.map((person, index) => (
    <Fragment key={person.id}>
      <Person
        forget={props.deletePerson.bind(this, index)}
        changed={props.nameChange.bind(this, index)}
        click={props.hustleForNetworth.bind(this, index)}
        name={person.name}
        netWorth={person.netWorth}
      />
      <br></br>
    </Fragment>
  ));
};

export const Persons = persons;
