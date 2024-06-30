import React from 'react'

function Card(props) {
  return (
    <div>
        <h1>Card</h1>
        <h2>{props.name}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default Card;