import React from 'react'
import "./style.css"

export const Button = ({children}) => {
  return (
    <button style={{backgroundColor: "var(--primary)", color: "var(--primary-foreground)", padding: "10px 20px", border: "none", borderRadius: "var(--border-radius)", cursor: "pointer" ,width: "100%"}}>
        {children}
    </button>
  )
}
