import './App.css';
import styled from 'styled-components'
import background from "../src/img/chalkboard.jpg"
import { useState } from 'react';
import GuessInput from './GuessInput';

function App() {
const [word, setWord] = useState("placeholder word")

// Fetch data from dictionary and select random word
const getData=()=>{
  fetch('dictionaryData.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      // setData(myJson)
      setWord(myJson && myJson.length>0 && myJson[Math.floor(Math.random() * myJson.length)].word.split(''))
      
    });
}

  return (
    <Wrap style={{ backgroundImage: `url(${background})` }}>
      <Header>
        Hangman

        <GuessInput word={word}/>

        <NewWordButton onClick={()=>getData()}>Get new word!</NewWordButton>

      </Header>
    </Wrap>
  );
}

const NewWordButton = styled.button` 
  position: relative;
  top: -20rem;
  left: -20rem;
  height: 2rem;
`

const Wrap = styled.div`
  /* background-image: url({background}); */
  /* background: rgb(256,100,100); */
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`
const Header = styled.header` 
  width: 100vw;
  height: 2rem;
  color: white;
  text-align: center;
  font-size: 3rem;
  font-family: 'Permanent Marker', cursive;
`
const Wordbank = styled.p` 
  color: whitesmoke;
  font-size: 3rem;
`


export default App;
