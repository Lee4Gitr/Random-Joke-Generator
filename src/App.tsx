import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Punchline} from "./Components/Punchline/Punchline";

type Joke = {id: number, type: string, setup: string, punchline: string}

function App() {

  //Simple state management using closures in App component. Redux would be used for larger projects.
  let [joke, setJoke] = useState({} as Joke)
  let [visible, setVisible] = useState(false)
  let [errorMessage, setErrorMessage] = useState("")

  const getRandomJoke = async (url: string = "https://official-joke-api.appspot.com/jokes/random") => {
    setVisible(false);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: Joke = await response.json();
        setErrorMessage("")
        setJoke(data);
      } else {
        setErrorMessage(`${response.status}: ${response.statusText}`)
      }
    }catch (e) {
      setErrorMessage(`${e}`)
    }
  }

  return (
    <div className="App container">
      <Header callback={getRandomJoke} />
      <Punchline visible={visible} setVisible={setVisible} errorMessage={errorMessage} joke={{id: joke.id, type: joke.type, setup: joke.setup, punchline: joke.punchline}}/>
    </div>
  );
}

export default App;
