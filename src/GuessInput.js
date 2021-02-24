import {useState} from 'react'
import styled from 'styled-components'

import six from '../src/img/6.png'
import five from '../src/img/5.png'
import four from '../src/img/4.png'
import three from '../src/img/3.png'
import two from '../src/img/2.png'
import one from '../src/img/1.png'
import zero from '../src/img/0.png'
import { useEffect } from 'react'

function GuessInput(props) {
  const [letter,setLetter] = useState('')
  const [guessedLetters, addLetter] = useState([])
  const [lives, setLives] = useState(6)
  const [selectedImage, setSelectedImage] = useState(six)
  const [gameText, setText] = useState("Welcome to react hangman!")

  // Check if the guessed letter matches was already guessed previously
  function sendGuess() {
    if (!guessedLetters.includes(letter)) {
      addLetter([...guessedLetters, letter])
    } else {
        console.log("You already guessed that letter!")
    }
    checkGuesses()
    checkLetter()
    setLetter('')
  }

  // Check if player has guessed the word, and if so show win message
  function checkGuesses(){
    var display_string = ""

    for(var i=0;i<props.word.length;i++){
      if (guessedLetters.includes(props.word[i])){
        display_string = display_string + props.word[i]
        // console.log({display_string})
      } else {
        display_string = display_string + "_"
        // console.log({display_string})
      }
    }

    console.log(display_string.split("").toString())
    console.log(props.word.toString())

    // win condition
    if (display_string.split("").toString().localeCompare(props.word) === 0) {
      console.log("aye")
      addLetter([])
      setLives(6)
      setImage()
      // addLetter([])
      // setText("why does this not work? ):")
    }
    return <h2>{display_string}</h2>
  }

  // Checks if last letter was correct or not, manages lives
  function checkLetter() {
    if (!props.word.toString().includes(letter)) {
      setLives(lives - 1)
      // addLetter([''])
      // setImage()
    }
    return <h2>{lives}</h2>
  }

  // Sets the image according to how many lives are left
  function setImage() {
    if (lives === 6) {
      setSelectedImage(six)
    } else if (lives === 5) {
      setSelectedImage(five)
    } else if (lives === 4) {
      setSelectedImage(four)
    }  else if (lives === 3) {
      setSelectedImage(three)
    }  else if (lives === 2) {
      setSelectedImage(two)
    }  else if (lives === 1) {
      setSelectedImage(one)
    }  else if (lives === 0) {
      setText("HAH! YOU LOSE!")
      setSelectedImage(zero)
    } 
  }

useEffect(()=>{
  setImage()
})

  return <Container>
    
    {/* {props.word} */}

    {/* {LivesDisplay} */}

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <HangmanDisplay src={selectedImage}/>

      <WordDisplay>{checkGuesses()}</WordDisplay>

      {/* {lives} */}
      
      <TextInput 
        maxLength = "1"
        value={letter}
        onChange={event=> {
            setLetter(event.target.value)
          }
      }
      />

      <Submit onClick={sendGuess}>Guess</Submit>

      <GameText>{gameText}</GameText>
    </div>
  </Container>
}

const GameText = styled.p` 
  color: white;
  font-size: 1.5rem;
  position: relative;
  top: -2rem;
`

const HangmanDisplay = styled.img`
  max-width: 15vw;
  position: relative;
  top: 3rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const TextInput = styled.input`
  width: 3.5rem;
  height: 3.5rem;
  font-size: 3rem;
  text-align: center;
  color: white;
  background: inherit;
  border-radius: .2rem;
  border-color: white;
  position: relative;
  top: -2rem;
`

const Submit = styled.button`
  width: 5rem;
  height: 1.5rem;
  position: relative;
  top: -1.5rem;
`
const WordDisplay = styled.p` 
  font-size: 1.75rem;
  letter-spacing: 1rem;
`
export default GuessInput