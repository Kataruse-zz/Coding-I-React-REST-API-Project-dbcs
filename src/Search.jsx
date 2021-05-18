import React, { useState, useEffect, useRef } from 'react';
import Pokedex from "./components/Pokedex";
import Searchpk from "./components/Searchpk";
import App from "./App.jsx";
import "./Search.css";

function Search() {
  const [pokemon, setPokemon] = useState({})
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState(1)
  const name = useRef(null)
  const [pokemonName, setPokemonName] = useState({})
  const [dexID, setDexID] = useState(1);
  const [userPokemon, setUserPokemon] = useState("")
  const [results, setResults] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
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

  const backButt = () => {
    setToggle2("maroon")
    setCurrentPage(0)
  }

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
      <main className={toggle2}>
        <header>
          {currentPage == 0 && (
            <>
              <img src="src/img/chadgameb.png" className="gameheader" />
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
              <Searchpk setId="setId" setCurrentPage="setCurrentPage"/>
            </>
          )}
          {currentPage == 1 && (
            <>
              <img src="src/img/chadgame.png" className="appheader" />
            </>)}
        </header>
        {currentPage == 1 && (<App id={id} />)}
        {currentPage == 1 && (
          <>
            <div>
              <button onClick={backButt}>Back to Dex</button>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Search;