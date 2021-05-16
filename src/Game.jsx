import React, { useState, useEffect, useRef } from 'react';
import Pokedex from "./components/Pokedex";
import './Game.css';

function Game() {
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [dexID, setDexID] = useState("1");
  const name = useRef(null)
  const [setUserPokemon, userPokemon] = useState("")
  const [results, setResults] = useState("")

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

  const searchPK = () => {
    const userInput = name.current.value.toLowerCase();

    for (var i = 1; i < 899; i++) {
      if (pokemonName.results[i - 1].name == userInput || i == userInput) {
        console.log("match")
        setResults("match")
        setDexID(i)
        setUserPokemon(pokemonName.results[i].name)
        break
      } else {
        console.log("no match")
        setResults("no match")
      }
      console.log(userInput)
    };
  }

  return (
    <>
      <main className="gameBack">
        <header className="headerBackground">
          <img src="src/img/chadgameb.png" />
        </header>
        <input ref={name} type="text" className="searchbar" placeholder="Enter a Pokemon or ID" />
        <button onClick={searchPK}>Search</button>
        <h1>{results}</h1>
        {isLoaded && (
              <Pokedex id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.front_default} />
        )}
      </main>
    </>
  );
}

export default Game;