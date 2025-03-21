import React from 'react'

const Typography = ({type, text}) => {

    if(type === "heading") {
        return <h1 style={{margin: 0}}>{text}</h1>
    }
    else if( type === "normal") {
        return <p>{text}</p>
    }
    else if (type === "sub") {
        return <sub>{text}</sub>
    }

  return (
    <div style={{background:"red"}}>Error {type} Not Defined </div>
  )
}

export default Typography