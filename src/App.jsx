import React, { useState, useEffect, useRef } from 'react';
import PokemonMovesTypes from "./components/PokemonMovesTypes";
import PokemonData from "./components/PokemonData";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [dexID, setDexID] = useState(Math.floor(Math.random() * 898));

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
      <button className="bigbutt">Back to Dex</button>
    </main>
  </>
);
}

export default App;