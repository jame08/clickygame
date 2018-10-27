import React, { Component } from "react";
import GameCards from "./components/GameCards"
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import cards from "./Cards.json";
import "./App.css";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0
  };

  gameOver = () => {
 
    this.state.cards.map(x => {
      x.attr = false;
      return true;
      
    })
    this.setState({score: 0});
    console.log("over");


  }

  shuffleArray =  id => {
   
    this.state.cards.find( x => {

      if (x.id === id ){

        if(x.attr === false){
          x.attr = true;
          this.setState({score: this.state.score + 1});
          this.state.cards.sort(() => Math.random() - 0.5)

     return true;

    }else {
        this.gameOver();

        }
      }
    });

  }

  render() {
    return (
    
      <Wrapper>
      <Header score= {this.state.score} ></Header>
      
        {this.state.cards.map(Card => (
          <GameCards
            shuffleArray={this.shuffleArray}
            id={Card.id}
            key={Card.id}
            image={Card.image}
            attr = {Card.attr}
  
          />
        ))}

      
      </Wrapper>
    );
  }
}

export default App;
