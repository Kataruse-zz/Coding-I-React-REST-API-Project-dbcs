import React, { useState, useEffect, useRef } from 'react';
import PokemonMovesTypes from "./components/PokemonMovesTypes";
import PokemonData from "./components/PokemonData";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  // const [results, setResults] = useState("")
  const [dexID, setDexID] = useState(Math.floor(Math.random() * 898));
  // const name = useRef(null)
  // const [setUserPokemon, userPokemon] = useState("")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${dexID}/`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setIsLoaded(true)
      })
  }, [dexID])

  const refreshPK = () => {
      setDexID(Math.floor(Math.random() * 898))
  }

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setPokemonName(data)
  //     })
  // })

// const handleCheckPokemon = () => {
//   const userInput = name.current.value.toLowerCase();
  
//   for (var i = 0; i < 898; i++) {
//     if (pokemonName.results[i].name == userInput) {
//     console.log("match")
//     setResults("match")
//     setDexID(Math.floor(Math.random() * 898))
//     setUserPokemon(userInput)
//     handleNav(1)
//     break
//     } else {
//     console.log("no match")
//     setResults("no match")
//     }

//     console.log(userInput)
//     };
// }

return (
  <>
    <header>
      <img className="headerBackground" src="src/img/chad.png" />
    </header>
    <main className="background">
      {isLoaded && (
        <PokemonData pokemon={pokemon} />
      )}
      <br/>
      <div className="moveStat">
        {isLoaded && (
          <PokemonMovesTypes pokemon={pokemon} />
        )}
      </div>
      <button className="bigbutt">Back</button>
      <button className="bigbutt" onClick={refreshPK}>Refresh Pokemon</button>
    </main>
  </>
);
}

export default App;