import React from "react"

function PokemonData({ pokemon }) {

  var i = Math.floor(Math.random() * pokemon.length)

  return (
    <>
      <h3>{pokemon.id} {pokemon.name}</h3>
      <h4>Type: {pokemon.types[0].type.name},{pokemon.types[1].type.name}</h4>
      <h4>Moves: {pokemon.moves[0].move.name}</h4>
      <h4>Base Stats: XP: {pokemon.base_experience} | HP:{pokemon.stats[0].base_stat} | Attack:{pokemon.stats[1].base_stat} | Defense:{pokemon.stats[2].base_stat} | lbs: {pokemon.weight} | cm: {pokemon.height}</h4>
      <img src={pokemon.sprites.front_default} alt="Image of Pokemon" className="pokemon" />
      <br />
    </>
  )
}

export default PokemonData;