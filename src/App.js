import React, { Component } from "react";
import GameCards from "./components/GameCards"
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import cards from "./Cards.json";
import "./App.css";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0
  };

  
  gameOver = () => {

    const newArr = this.state.cards.map(card => ({id: card.id,name:card.name,image:card.image,attr: false})).map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

  
    this.setState(
      {
        cards: newArr,
        score: 0 
      }
      );
    console.log("over");
    

  }

  shuffleArray =  id => {



    this.state.cards.find( x => {
      

      if(this.state.score < this.state.cards.length - 1){

        if (x.id === id  ){

          if(x.attr === false){
            x.attr = true;
            this.setState({score: this.state.score + 1});
            const arr = this.state.cards
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
  
            this.setState({cards: arr })
  
       return true;
  
      }else {
          this.gameOver();
  
          }
        } //big if

      }
      else {
        alert("Won");

      }

    });

  }

  render() {
    return (
      
<div>

      <NavBar score= {this.state.score}></NavBar>
      
      <Wrapper>
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

      </div>
     
    );
  }
}

export default App;
