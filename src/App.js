import React, { Fragment, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  {Person} from './Components/Person/index';


class App extends Component{
 
 state = {
    persons:[

      { id:"cabasa", name:'Chidelu', netWorth: 0},
      { id:"casablanca", name:'Onyeka', netWorth: 0},
      { id:"bianca", name:'Ugochukwu', netWorth: 0}
  
    ],
    showPersons:false
  };

  

switchNetWorthHandler = () =>
{
   this.setState({
      persons:[

        {id:"cabasa",  name:'Chidelu', netWorth: this.generateNetWorth()},
        {id:"casablanca", name:'Onyeka', netWorth: this.generateNetWorth()},
        {id:"bianca",  name:'Ugochukwu', netWorth: this.generateNetWorth()}
  
      ],
      showPersons:true
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
  let persons = [...this.state.persons]

  persons = persons.map((person,index)=>{    
    if(position===index)
      person.name = event.target.value
    return person
  })

  this.setState({
    persons:persons
  });
}

deletePersonHandler = (position,event) =>{
  const persons = this.state.persons.slice();
  //const persons = [...this.state.persons]
  persons.splice(position,1);


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
     backgroundColor:'lightgreen',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer',
     ':hover':{
       backgroundColor:'#0088FF',
       color:'black' 
     }
   }

   let buttonText = "Show Persons";

   let persons = null;

   let classes = ['red', 'bold'].join(' ');
 
   if(this.state.showPersons){
    buttonText = "Switch Net Worth";
    style.backgroundColor = 'lightblue';
    style[':hover'] = {
      background:'#008299',
      color:'black' 
    }
     persons = (
                this.state.persons.map((person,index) => 
              <Fragment key={person.id}>
              <Person forget={this.deletePersonHandler.bind(this,index)}  changed={this.nameChangeHandler.bind(this,index)} click={this.husltleForNetworthHandler.bind(this,index)}  name={person.name} netWorth={person.netWorth} />
              <br></br>
              </Fragment> )
     )

   }



    return (
        <div className="App">
          <h1>Hi, I'm An Expert Software Engineer. Chidelu By Name</h1>
          <p className={classes} >Building World Class Solutions that Solve Real Life Problems</p>
          <br></br>
          <button  style={style}  onClick={this.switchNetWorthHandler} className="btn btn-primary">{buttonText}</button>
          <br></br>
          {
            persons
          }
          
        </div>

      //React.createElement('div',{className:'App'}, React.createElement('h1',null,"Damn, i just learnt something new"))
    );

      }
  

}


export default App;
