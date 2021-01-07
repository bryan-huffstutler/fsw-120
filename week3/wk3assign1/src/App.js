import React from "react"
import './App.css';
import SuperHero from "./components/SuperHero"
import shdata from "./components/shdata.json"

class App extends React.Component {
  constructor (){
    super()
    this.state = {
      heroes: shdata
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (x) {
    alert(x)
  }
  render(){
    const heroes = this.state.heroes.map(hero => <SuperHero key={hero.id} handleClick={this.handleClick} catchPhrase={hero.catchPhrase} imageName={hero.imageName} name={hero.name} show={hero.show}/>)
    return (
      <div style={{backgroundColor: "lightgrey"}}>
        {heroes}
      </div>
    )
  }
  
}

export default App;
