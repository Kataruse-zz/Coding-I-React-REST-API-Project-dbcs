import React, { useState, useEffect, useRef } from 'react';
import PokemonData from "./components/PokemonData";
import './App.css';

function App({id}) {
  const [pokemon, setPokemon] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setIsLoaded(true)
      })
  }, [id])

  return (
    <>
      <main className="background">
        {isLoaded && (
          <PokemonData pokemon={pokemon} />
        )}
      </main>
    </>
  );
}

export default App;