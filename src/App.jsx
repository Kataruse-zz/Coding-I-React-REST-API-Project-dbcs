import React, {useState, useEffect} from 'react';
import './App.css';

// const pokemon = [
//   {
//     "id": 132,
//     "name": "ditto",
//     "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
//     "moves": [
//       {
//         "slot1": "transform",
//         "slot2": "empty",
//         "slot3": "empty",
//         "slot4": "empty",
//       },
//     ],
//     "types": [
//       {
//         "type1": "normal",
//         "type2": "empty",
//         "type3": "empty",
//       },
//     ],
//     "stats": [
//       {
//         "xp": 101,
//         "hp": 48,
//         "attack": 48,
//         "defense": 48,
//         "weight": 40,
//         "height": 3
//       },
//     ],
//   },
//   {
//     "id": 124,
//     "name": "jynx",
//     "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
//     "moves": [
//       {
//         "slot1": "pound",
//         "slot2": "double-slap",
//         "slot3": "mega-punch",
//         "slot4": "ice-punch",
//       },
//     ],
//     "types": [
//       {
//         "type1": "ice",
//         "type2": "psychic",
//         "typee": "empty",
//       },
//     ],
//     "stats": [
//       {
//         "xp": 101,
//         "hp": 65,
//         "attack": 50,
//         "defense": 35,
//         "weight": 406,
//         "height": 14
//       },
//     ]
//   }
// ]

// var i = Math.floor(Math.random() * pokemon.length)

// console.log(pokemon);

function App() {
  const [pokemon, setPokemon] = useState({})
  const [dexID, setDexID] = useState(1);

  useEffect (() => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${dexID}/`)
   .then(response => response.json())
   .then(data => setPokemon(data))
  }, [dexID])

 const handleRefresh = () => {
    setDexID(Math.floor(Math.random()*pokemon.length))
    console.log(dexID)
  }

  // const { name, id, sprite } = pokemon
  // const { slot1, slot2, slot3, slot4 } = pokemon.moves[0]
  // const { type1, type2, type3 } = pokemon.types[0]
  // const { xp, hp, attack, defense, weight, height } = pokemon.stats[0]

  return (
    <>
      <main>
      <br/>
      <div className="title">
        <h2>What Pokemon do you want to start with?</h2>
        <input type="text" />
        <button>Enter</button>
        </div>
        <div className="pkinfo">
          <h3>{pokemon.id} {pokemon.name}</h3>
          <h4>Type:</h4>
          {/*<h4>Moves: {slot1},{slot2},{slot3},{slot4}</h4>
          <h4>Base Stats: XP:{xp} | HP:{hp} | Attack:{attack} | Defense:{defense} | {weight}lbs | {height}cm</h4>
          <img src={sprite} alt="Image of Pokemon" class="pokemon" />
          <br/>
          <a href="https://013-ReactREST-API-Project-dbcs.dbcs.repl.co"><button onClick={handleRefresh}>New Pokemon</button></a>*/}
        </div>  
      </main>
    </>
  );
}

export default App;