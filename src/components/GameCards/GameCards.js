import React from "react";
import "./GameCards.css";

const GameCards = props => (


  <div className="card">
    <div className="img-container"  >
      <img alt={props.name} src={props.image}  onClick = {() => props.shuffleArray(props.id)}/>
    </div>
  </div>

);

export default GameCards;
