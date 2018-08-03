import React from "react";
import Sound from 'react-sound';
//import page layout utils for components
import Column from "../Layout/Column.js";
import Row from "../Layout/Row.js";
import Container from "../Layout/Container.js";
//import components
import Alerts from "../Alerts/Alerts.js";
import CelebCard from "../Card";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import Navpills from "../Navpills";
import Score from "../Score/Score.js";
import Wrapper from "../Wrapper";
//import helper, data, assets files
import cards from "../../assets/json/celebrityCards.json";
import "./App.css";
import soundCorrect from "../../assets/audio/yababy.mp3";
import soundIncorrect from "../../assets/audio/GameShowBuzzer.mp3";
import victoryTheme from "../../assets/audio/simplythebestbyTinaTurner.mp3";
import theme from "../../assets/audio/VIDEOGAMEAllThemeSongs.mp3";

class App extends React.Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    selected: [],
    soundURL: theme,
    soundPosition: 0,
    soundStatus: Sound.status.PLAYING,
    shake: "",
    message1: "Select an image to begin!",
    message2: "",
    alertType: "info",
    topScoreType: "info",
    volume: "on"
};
// On click: Shuffle Cards
shuffle = id => {
    this.setState({
        cards: this.state.cards.sort(function(a,b){
                return 0.5 - Math.random();
            }
        )
    })
}
// On click: Volume control
volumeClick = () => {
    if(this.state.volume === "off"){
        this.setState({ 
            volume: "on",
            soundStatus: Sound.status.PLAYING
        });
    }
    else{
        this.setState({ 
            volume: "off",
            soundStatus: Sound.status.PAUSED,
            soundURL: theme
        });
        
    }
};
// on click, perform tasks if correct or incorrect
incrementClick = id => {
    let ids = this.state.selected
    const incorrect = ids.includes(id);
    if(!incorrect){
        this.state.selected.push(id);
        let newScore = this.state.score + 1;
        this.setState({score: newScore});
        if(newScore === 24){
            this.setState({
                score: 0,
                selected: [],
                topScore: newScore,
                message1: "You win!",
                message2: "You have cracked this game with PERFECT MEMORY!!!",
                alertType: "success"
            });
            if(this.state.volume === "on"){
                this.setState({ 
                    soundStatus: Sound.status.PLAYING,
                    soundPosition: 0,
                    soundURL: victoryTheme
                });
            }
        }
        else if(newScore > this.state.topScore){
            this.setState({
                topScore: newScore, 
                message1: "YAY Baby!",
                message2: "You guessed correctly!",
                alertType: "success",
                topScoreType: "success"
            });
            if(this.state.volume === "on"){
                this.setState({ 
                    soundStatus: Sound.status.PLAYING,
                    soundPosition: 0,
                    soundURL: soundCorrect
                });
            }
        }
        else{
            this.setState({
                message1: "Groovy Baby!",
                message2: "You guessed correctly!",
                alertType: "success",
                topScoreType: "info"
            });
            if(this.state.volume === "on"){
                this.setState({ 
                    soundStatus: Sound.status.PLAYING,
                    soundPosition: 0,
                    soundURL: soundCorrect
                });
            }
        }
    }
    else{
        this.setState({
            score: 0,
            selected: [], 
            shake: "incorrect",
            message1: "WRONG!",
            message2: "Start over and try again!",
            alertType: "danger",
            topScoreType: "info"
        });
        if(this.state.volume === "on"){
            this.setState({ 
                soundStatus: Sound.status.PLAYING,
                soundPosition: 0,
                soundURL: soundIncorrect
            });
        }
        setTimeout(function(){ 
            this.setState({ shake: "" }); 
        }.bind(this), 1000);
    }
};
// Render the App
render(){
  return(
    <div className="app">
        <Wrapper>
          <Navpills
            message1={this.state.message1}
            message2={this.state.message2}
            curScore={this.state.score}
            topScore={this.state.topScore}
            volumeOn={this.state.volume}
            volume={this.volumeClick}
          />

          <Header />

          <Container>
            <Column size="lg-6">
              <Alerts
                message1={this.state.message1}
                message2={this.state.message2}
                alertType={this.state.alertType}
              />
            </Column>
            <Column size="lg-6">
              <Score 
                shake={this.state.shake}
                score={this.state.score} 
                topScore={this.state.topScore}
                alertType={this.state.alertType}
                topScoreType={this.state.topScoreType}
              />
            </Column>
          </Container>

          <Container>
            <Main 
                shake={this.state.shake}
            >
                <Row>
                {this.state.cards.map((cards,i) => (
                <Column size="sm-3">
                    <CelebCard 
                        id={cards.id} 
                        name={cards.name} 
                        image={cards.image} 
                        key={i} 
                        increment={this.incrementClick} shuffle={this.shuffle}
                    />
                    </Column>
                ))}
                </Row>
            </Main>
          </Container>

          <Sound 
            autoLoad={true} 
            url={this.state.soundURL} 
            playStatus={this.state.soundStatus} 
            playPosition={this.state.soundPosition}
          />

          <Footer/>
        </Wrapper>
      </div>
    );
  };
}

export default App;
