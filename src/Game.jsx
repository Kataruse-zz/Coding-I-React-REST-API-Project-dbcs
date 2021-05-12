import React, { useState, useEffect, useRef } from 'react';
import PokemonData from "./components/PokemonData";
import './Game.css';

const name = "squirtle"

function Game() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const [currentHP, setCurrentHP] = useState("")
  const [currentMaxHP, setCurrentMaxHP] = useState("")
  const [currentATK, setCurrentATK] = useState("")
  const [currentDEF, setCurrentDEF] = useState("")
  const [currentXP, setCurrentXP] = useState("")
  const [nextLevelXP, setNextLevelXP] = useState("")
  const [uLevel, setULevel] = useState("")
  // const name = useRef(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setIsLoading(false)
        setCurrentATK(pokemon.stats[1].base_stat)
        setCurrentDEF(pokemon.stats[2].base_stat)
        setCurrentHP(pokemon.stats[0].base_stat)
        setCurrentMaxHP(pokemon.stats[0].base_stat)
        setNextLevelXP(pokemon.base_experience)
        setCurrentXP(0)
        setULevel(1)
        // setIsLoading(false)
      })
  }, [])

  const statIncrease = () => {
    setCurrentATK(currentATK + 4)
    setCurrentDEF(currentDEF + 4)
    setCurrentHP(currentHP + 4)
    setCurrentMaxHP(currentMaxHP + 5)
    setULevel(uLevel + 1)
  }

  return (
    <>
      <main>
        <header className="pkstats">
         {isLoading ? (<h1>Loading...</h1>) : (<h1>Current Pokemon: {pokemon.name} Level: {uLevel} | HP: {currentHP}/{currentMaxHP} | ATK: {currentATK} | DEF: {currentDEF} | XP to next level: {currentXP}/{nextLevelXP}  </h1>)}
          <img src="{pokemon.sprites.front_default}" alt={pokemon.name} />
          <br />
          <button onClick={statIncrease}>sheeesh</button>
        </header>
        <div className="list">

          <input id='input1' type="text" placeholder="Enter a Command" />
          <input type='button' value='Enter' />

          <ul id="list">
          </ul>


        </div>
      </main>
    </>
  );
}

export default Game;