import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

function Game() {
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

  return (
    <>
      <main className="gameBack">
        <header>
          <img className="gameHeaderBackground" src="src/img/chadgameb.png" />
        </header>
        <h2>1 Bulbasaur</h2><img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" className="testIMG" />
        <h2>2 Bulbasaur</h2><img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" />
        <h2>3 Bulbasaur</h2><img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" />
        <h2>4 Bulbasaur</h2><img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" />
      </main>
    </>
  );
}

export default Game;