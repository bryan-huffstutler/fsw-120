import React from "react"
import Blogpost from "./Blogpost"

function Bloglist (){
  return (
    <div>
      <div style={{backgroundColor: "grey", padding: "85px", marginBottom: "50px", color: "white"}}>
        <h1 style={{paddingBottom: "10px", fontSize: "55px"}}>Clean Blog</h1>
        <p style={{paddingBottom: "40px"}}>A Blog Theme By Start Bootstrap</p>
      </div>
      
      <Blogpost />
    </div>
  )

}
export default Bloglist;