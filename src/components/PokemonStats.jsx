import React, { useState, useEffect } from 'react';

function PokemonUserStats({ uStats }) {

const statIncrease = () => {
    setCurrentATK(currentATK + 4)
    setCurrentDEF(currentDEF + 4)
    setCurrentHP(currentHP + 4)
    setCurrentMaxHP(currentMaxHP + 5)
    setULevel(uLevel + 1)
  }

  return (
    <h1>Current Pokemon: {pokemon.name} Level: {uLevel} | HP: {currentHP}/{currentMaxHP} | ATK: {currentATK} | DEF: {currentDEF} | XP to next level: {currentXP}/{nextLevelXP}  </h1>
    <img src="pokemon.sprites.front_default" alt={pokemon.name} />
    <br />
    <button onClick={statIncrease}>sheeesh</button>
)
}

export default PokemonUserStats;