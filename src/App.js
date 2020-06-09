import React, { useState, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Person} from './Components/Person/index';

const app = props =>{
 
  const [functionalState,setFunctionalState] = useState({
    persons:[

      {name:'Chidelu', netWorth: 0},
      {name:'Onyeka', netWorth: 0},
      {name:'Ugochukwu', netWorth: 0}
  
    ]
  })

  
const switchNetWorthHandler = () =>
{
   setFunctionalState({
      persons:[

        {name:'Chidelu', netWorth: generateNetWorth()},
        {name:'Onyeka', netWorth: generateNetWorth()},
        {name:'Ugochukwu', netWorth: generateNetWorth()}
  
      ]
    });
}

const nameChangeHandler = ()=>{
  
}

const generateNetWorth = ()=>{
  return currencyFormat(Math.random() * 10000000000)
}
const currencyFormat = (num)=>{
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

 
    return (
      <div className="App">
        <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
        <p>Building Worlds Class Solutions that Solve Real Life Problems</p>
        <br></br>
        <button onClick={switchNetWorthHandler} className="btn btn-primary">Switch Net Worth</button>
        <br></br>
        {
          functionalState.persons.map(person => 
            <Fragment>
            <Person click={switchNetWorthHandler}  name={person.name} netWorth={person.netWorth} />
            <br></br>
            </Fragment> 
          )

        }
        
      </div>

      //React.createElement('div',{className:'App'}, React.createElement('h1',null,"Damn, i just learnt something new"))
    );
  

}


// let state = {
//   persons:[

//     {name:'Chidelu', netWorth: this.currencyFormat(Math.random() * 10000000000)},
//     {name:'Onyeka', netWorth: this.currencyFormat(Math.random() * 10000000000)},
//     {name:'Ugochukwu', netWorth: this.currencyFormat(Math.random() * 10000000000)}

//   ]
// };


  



export default app;
