/* import React from "react" */

function Navbar () {

  return (
    <div id="nav" style={{backgroundColor: "grey"}}>
       
      <a href="" style={{display: "flex", float: "left", paddingLeft: "25%",textDecoration: "none"}}>Start Bootstrap</a>
      <div id="rightNav">
        <a href="" style={{paddingLeft: "15px", textDecoration: "none"}}>Home</a>
        <a href="" style={{paddingLeft: "15px", textDecoration: "none"}}>About</a>
        <a href="" style={{paddingLeft: "15px", textDecoration: "none"}}>Sample Post</a>
        <a href="" style={{paddingLeft: "15px", textDecoration: "none"}}>Contact</a>
      </div>
    </div>
  )
}

export default Navbar