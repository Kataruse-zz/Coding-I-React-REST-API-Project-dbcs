import React, { useState, useEffect } from 'react';
import PokemonData from "./components/PokemonData";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [dexID, setDexID] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${dexID}/`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setIsLoaded(true)
      })
  }, [dexID])

  const handleRefresh = () => {
    setDexID(Math.floor(Math.random()*pokemon.length))
  }

  return (
    <>
      <main>
        <br />
        <div className="title">
          <h2>What Pokemon do you want to start with?</h2>
          <input type="text" />
          <button>Enter</button>
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