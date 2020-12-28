import React from "react"
import './App.css';
import vacationSpots from "./vacdata"
import Card from "./components/Card"

function App() {
  const vacSpots = vacationSpots.map(function (x) {
    if (x.price<500) {
        return <Card price={x.price} place={x.place + "$"} timeToGo={x.timeToGo}/>
    } else if (x.price<1000) {
        return <Card price={x.price} place={x.place + "$$"} timeToGo={x.timeToGo}/>
    } else {
        return <Card price={x.price} place={x.place + "$$$"} timeToGo={x.timeToGo}/>
    }
  })
    
    return (
        <div>
            {vacSpots}            
        </div>
    )
}

export default App;
