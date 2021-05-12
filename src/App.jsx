import React, { useState, useEffect, useRef } from 'react';
import PokemonData from "./components/PokemonData";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [results, setResults] = useState("")
  const [dexID, setDexID] = useState(Math.floor(Math.random() * 898));
  const name = useRef(null)
  const [setUserPokemon, userPokemon] = useState("")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${dexID}/`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setIsLoaded(true)
      })
  }, [dexID])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
      .then(response => response.json())
      .then(data => {
        setPokemonName(data)
      })
  })

const handleCheckPokemon = () => {
  const userInput = name.current.value.toLowerCase();
  
  for (var i = 0; i < 898; i++) {
    //data isnt being pulled correctly and i loop isnt
    if (pokemonName.results[i].name == userInput) {
    console.log("match")
    setResults("match")
    setDexID(Math.floor(Math.random() * 898))
    setUserPokemon(userInput)
    handleNav(1)
    break
    } else {
    console.log("no match")
    setResults("no match")
    }

    console.log(userInput)
    };
}

const handleRefresh = () => {
  setDexID(Math.floor(Math.random() * 898))
}

// const randomPokemon = () => {
//   setDexID(Math.floor(Math.random() * 898))
//   .then (handleCheckPokemon == pokemonName.results[dexID].name)
//   setResults(pokemonName.results[dexID].name)
// }

return (
  <>
    <header>
      <img className="header" src="src/img/head.png" />
    </header>
    <main className="mainMain">
      <br />
      <div className="title">
        <h2>What Pokemon do you want to start with?</h2>
        <input ref={name} type="text" placeholder="Enter a Pokemon Name" />
        <button onClick={handleCheckPokemon}>Enter</button>
        <p>{results}</p>
        <br />
        <br />
        <button>Random Pokemon</button>
      </div>
      <div className="pkinfo">
        {isLoaded && (
          <PokemonData pokemon={pokemon} />
        )}
        <button onClick={handleRefresh}>New Pokemon</button>
      </div>
    </main>
  </>
);
}

export default App;