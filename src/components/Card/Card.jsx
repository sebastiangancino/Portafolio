import React from 'react';
import  '../Card/Card.css';

const Card = ({emoji, heading, detail}) => {
  return (
    <div className= "card">
        <img src = {emoji} />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Learn more</button>

    </div>
  )
}

export default Card;