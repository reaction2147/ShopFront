import React from "react"
import "../styles/Card.css"

const Card = ({name , src, onClick}) => {
    return (
        <div className="card-container">
           <img alt={name} className="item-image" src={src}/> 
           <p className="item-name">{name}</p>
            
           </div>
    )
}

export default Card