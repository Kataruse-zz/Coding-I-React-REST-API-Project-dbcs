import React, { useState, useEffect, useRef } from 'react';
import Pokedex from "./Pokedex";
import "./Searchpk.css"

export default function Searchpk({setCurrentPage, setId}) {
  const [pokemonName, setPokemonName] = useState({})
  const [pokemon, setPokemon] = useState({})
  const [isLoaded, setIsLoaded] = useState(false);
  const [dexID, setDexID] = useState(1);
  const name = useRef(null);
  const [results, setResults] = useState("");
  const [userPokemon, setUserPokemon] = useState("");
  const [toggle2, setToggle2] = useState("maroon");

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
        setResults("")
        setId(i)
        setUserPokemon(pokemonName.results[i - 1].name)
        setToggle2("black")
        setCurrentPage(1)
        break
      } else {
        setResults("That's not a Pokemon")
      }
    };
  }

  const increase = () => {
    if (dexID !== 898) {
      setDexID(dexID + 1)
    } else {
      setDexID(1)
    }
  }
  const decrease = () => {
    if (dexID !== 1) {
      setDexID(dexID - 1)
    } else {
      setDexID(898)
    }
  }

  return (
    <>
      <div className="searchstyle">
        {isLoaded && (
          <>
            <h1>Either Enter in a Pokemon name/ID below or click on the pokemon you want to get its information</h1>
            <input ref={name} type="text" placeholder="Enter a Pokemon or ID" />
            <button onClick={searchPK}>Search</button>
            <p>{results}</p>
            <button onClick={decrease}>Last PK</button>
            <button onClick={increase}>Next PK</button>
            <Pokedex id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.front_default} setCurrentPage={setCurrentPage} setId={setId} setToggle2={setToggle2} />
            <h3>Below are all the pokemon you can enter or any number from 1-898</h3>
            <h1>---------------------------------------</h1>
          </>
        )}
      </div>
    </>
  )
}