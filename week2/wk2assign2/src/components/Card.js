import React from "react"

function Card (props) {
  let price = props.price
  let place = props.place  
  let timeToGo = props.timeToGo
  if (timeToGo === "Winter") {
    return (
      <div style={{backgroundColor:"red", borderRadius: 17, textAlign: "center"}}>
        <h1 style={{margin:10, padding:5}}>{place}</h1>
        <h3 style={{margin:10, padding:5}}>{price}</h3>
        <h3 style={{margin:10, padding:5}}>{timeToGo}</h3>
      </div>
    )
  } else if (timeToGo === "Spring") {
    return (
      <div style={{backgroundColor:"blue", borderRadius: 17, textAlign: "center"}}>
        <h1 style={{margin:10, padding:5}}>{place}</h1>
        <h3 style={{margin:10, padding:5}}>{price}</h3>
        <h3 style={{margin:10, padding:5}}>{timeToGo}</h3>
      </div>
    )
  } else if (timeToGo === "Fall"){
    return (
      <div style={{backgroundColor:"orange", borderRadius: 17, textAlign: "center"}}>
        <h1 style={{margin:10, padding:5}}>{place}</h1>
        <h3 style={{margin:10, padding:5}}>{price}</h3>
        <h3 style={{margin:10, padding:5}}>{timeToGo}</h3>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor:"pink", borderRadius: 17, textAlign: "center"}}>
        <h1 style={{margin:10, padding:5}}>{place}</h1>
        <h3 style={{margin:10, padding:5}}>{price}</h3>
        <h3 style={{margin:10, padding:5}}>{timeToGo}</h3>
      </div>
    )
  }
  
}

export default Card