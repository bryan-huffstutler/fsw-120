import React from "react"

function SuperHero(props) {
        return (
          <div style={{backgroundColor: "grey", borderRadius: "14px", textAlign: "center", padding: "20px", margin: "7px"}}>
            <img onClick={() => props.handleClick(props.catchPhrase)}src={props.imageName} style={{width: "200px", height: "200px"}}/>
            <h2 onClick={() => props.handleClick(props.catchPhrase)}>{props.name}</h2>
            <h5>From the show: {props.show}</h5>
          </div>
        )  
}

export default SuperHero;