import './App.css';
import styled from 'styled-components'
import background from "../src/img/chalkboard.jpg"
import { useState } from 'react';
import GuessInput from './GuessInput';

function App() {
const [word, setWord] = useState("placeholder word")
// const [letters, addLetter] = useState([])

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
    // <img src={background}></img>
    <Wrap style={{ backgroundImage: `url(${background})` }}>
      <Header>
        Hangman

        {/* Display selected word
        <div>
          {
            // data && data.length>0 && data[Math.floor(Math.random() * data.length)].word
            word
          }
        </div> */}

        <GuessInput word={word}/>

        <button onClick={()=>getData()}>Get word!</button>

        {/* <Wordbank>
          {letters}
        </Wordbank> */}

        {/* <button onClick={() => guessLetter(letters.concat("B"))}>
          {letters}
        </button> */}
      </Header>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* background-image: url({background}); */
  /* background: rgb(256,100,100); */
  background-size: cover;
  width: 100vw;
  height: 100vh;
`
const Header = styled.header` 
  width: 100vw;
  height: 2rem;
  color: white;
  text-align: center;
  font-size: 5rem;
  font-family: 'Permanent Marker', cursive;
`
const Wordbank = styled.p` 
  color: whitesmoke;
  font-size: 3rem;
`


export default App;
