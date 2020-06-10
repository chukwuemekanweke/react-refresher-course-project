import React, { useState, Fragment, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Person} from './Components/Person/index';


class App extends Component{
 
 state = {
    persons:[

      {name:'Chidelu', netWorth: 0},
      {name:'Onyeka', netWorth: 0},
      {name:'Ugochukwu', netWorth: 0}
  
    ]
  };

  
switchNetWorthHandler = () =>
{
   this.setState({
      persons:[

        {name:'Chidelu', netWorth: this.generateNetWorth()},
        {name:'Onyeka', netWorth: this.generateNetWorth()},
        {name:'Ugochukwu', netWorth: this.generateNetWorth()}
  
      ]
    });
}

husltleForNetworthHandler = ( position) => {

  let persons = this.state.persons.map((person,index)=>{    
    if(position===index)
      person.netWorth = this.generateNetWorth();
    return person
  })

  this.setState({
    persons:persons
  });
}

nameChangeHandler = (position,event)=>{
  let persons = this.state.persons.map((person,index)=>{    
    if(position===index)
      person.name = event.target.value
    return person
  })

  this.setState({
    persons:persons
  });
}

 generateNetWorth = ()=>{
  return this.currencyFormat(Math.random() * 10000000000)
}
 currencyFormat = (num)=>{
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

 render(){

   const style={
     backgroundColor:'white',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer'
   }

    return (
      <div className="App">
        <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
        <p>Building Worlds Class Solutions that Solve Real Life Problems</p>
        <br></br>
        <button style={style} onClick={this.switchNetWorthHandler} className="btn btn-primary">Switch Net Worth</button>
        <br></br>
        {
          this.state.persons.map((person,index) => 
            <Fragment key={index}>
            <Person  changed={this.nameChangeHandler.bind(this,index)} click={this.husltleForNetworthHandler.bind(this,index)}  name={person.name} netWorth={person.netWorth} />
            <br></br>
            </Fragment> 
          )

        }
        
      </div>

      //React.createElement('div',{className:'App'}, React.createElement('h1',null,"Damn, i just learnt something new"))
    );

      }
  

}


export default App;
