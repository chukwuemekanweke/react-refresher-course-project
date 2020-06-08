import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Person} from './Components/Person/index';


class App extends Component {

  state = {
    persons:[

      {name:'Chidelu', netWorth: this.currencyFormat(Math.random() * 10000000000)},
      {name:'Onyeka', netWorth: this.currencyFormat(Math.random() * 10000000000)},
      {name:'Ugochukwu', netWorth: this.currencyFormat(Math.random() * 10000000000)}

    ]
  };


  switchNetWorthHandler = () =>
  {
      this.setState({
        persons:[

          {name:'Chidelu', netWorth: this.currencyFormat(Math.random() * 10000000000)},
          {name:'Onyeka', netWorth: this.currencyFormat(Math.random() * 10000000000)},
          {name:'Ugochukwu', netWorth: this.currencyFormat(Math.random() * 10000000000)}
    
        ]
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
        <p>Building Worlds Class Solutions that Solve Real Life Problems</p>
        <br></br>
        <button onClick={this.switchNetWorthHandler} className="btn btn-primary">Switch Name</button>
        <br></br>
        {
          this.state.persons.map(person => 
            <Fragment>
            <Person name={person.name} netWorth={person.netWorth} />
            <br></br>
            </Fragment> 
          )

        }
        
      </div>

      //React.createElement('div',{className:'App'}, React.createElement('h1',null,"Damn, i just learnt something new"))
    );
  }


  
 currencyFormat  (num)  {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}



}

export default App;
