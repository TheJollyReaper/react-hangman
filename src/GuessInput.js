import {useState} from 'react'
import styled from 'styled-components'

function GuessInput(props) {
  const [letter,setLetter] = useState('')
  const [guessedLetters, addLetter] = useState([])

  // Check if the guessed letter matches a word letter
  function sendGuess() {
    if (!guessedLetters.includes(letter)) {
      addLetter([...guessedLetters, letter])
    } else {
        console.log("You already guessed that letter!")
    }
    checkGuesses()
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
    if (display_string.split("").toString().localeCompare(props.word) === 0) {
      console.log("aye")
    }
    return <h2>{display_string}</h2>
  }

  return <Container>
    {/* {props.word} */}

    <WordDisplay>{checkGuesses()}</WordDisplay>
    
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <TextInput 
        maxLength = "1"
        value={letter}
        onChange={event=> {
            setLetter(event.target.value)
          }
      }
      />

      <Submit onClick={sendGuess}>Guess</Submit>
    </div>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
`

const TextInput = styled.input`
  width: 5rem;
  height: 5rem;
  font-size: 4.5rem;
  text-align: center;
  color: white;
  background: inherit;
  border-radius: .2rem;
  border-color: white;
`

const Submit = styled.button`
  width: 5rem;
  height: 1.5rem;
  position: relative;
  top: .5rem;
`
const WordDisplay = styled.p` 
  font-size: 2.25rem;
  letter-spacing: 1rem;
`
export default GuessInput