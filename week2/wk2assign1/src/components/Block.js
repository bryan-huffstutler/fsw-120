import React from "react"

function Block (props) {
  let title = props.title
  let subTitle = props.subTitle
  let info = props.info

  return (
    <div className="block" style={{backgroundColor: props.backgroundColor, borderRadius:13}}>
      <h1 style={{margin:10}}>{title}</h1>
      <h3 style={{margin:10}}>{subTitle}</h3>
      <p style={{margin:10}}>{info}</p>
    </div>
  )
}

export default Block;