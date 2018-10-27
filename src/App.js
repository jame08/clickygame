import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";
import Field from "./components/fieldWrapper/field";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  gameOver = () => {
 
    this.state.friends.map(x => {
      x.attr = false;
      return true;
      
    })
    this.setState({score: 0});
    console.log("over");


  }

  shuffleArray =  id => {
   
    this.state.friends.find( x => {

      if (x.id === id ){

        if(x.attr === false){
          x.attr = true;
          this.setState({score: this.state.score + 1});
          this.state.friends.sort(() => Math.random() - 0.5)

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
      
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleArray={this.shuffleArray}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            attr = {friend.attr}
  
          />
        ))}

      
      </Wrapper>
    );
  }
}

export default App;
