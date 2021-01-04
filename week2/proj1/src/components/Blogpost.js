import React from "react"

function Blogpost (){
    let arr = [

    {

        title: "Man must explore, and this is exploration at its greatest",

        subTitle: "Problems look mighty small from 150 miles up",

        author: "Start Bootstrap",

        date: "September 24, 2019"

    },{

        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",

        subTitle: "",

        author: "Start Bootstrap",

        date: "September 18, 2019"

    },{

        title: "Science has not yet mastered prophecy",

        subTitle: "We predict too much for the next year and yet far too little for the next ten.",

        author: "Start Bootstrap",

        date: "August 24, 2019"

    },{

        title: "Failure is not an option",

        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",

        author: "Start Bootstrap",

        date: "July 8, 2019"

    }

]
  
  
  let xyz = arr.map(function (props){  
      return (
        <div id="blogpost" style={{display: "grid", gridColumn: "2/3", margin: "15px"}}>
          <h1>{props.title}</h1>
          <h3 style={{paddingTop: "20px", paddingBottom: "7px"}}>{props.subTitle}</h3>
          <span style={{color: "darkgrey", fontStyle: "italic", paddingBottom: "30px"}}>Posted By <b style={{color: "black"}}>{props.author}</b> on {props.date}</span>
          <hr/>
        </div>
      )
    }
  )
  return (
    <div id="bloglist-container" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
      {xyz}
      <button id="button" style={{fontWeight: "800",justifyContent: "center", backgroundColor: "#0A5C9B", fontSize:"9px",color: "white", gridColumn: "2/3", width: "27%", padding: "15px", display: "flex", border: "0", marginLeft: "480px", marginBottom: "15px"}}>OLDER POSTS</button>
      <div style={{gridColumn: "1/-1"}}><hr/></div>
    </div>
  )
}

export default Blogpost