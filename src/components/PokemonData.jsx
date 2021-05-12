import React, { useState, useEffect } from 'react';

function PokemonData({ pokemon }) {

const [offset, setOffset] = useState(0);

return (
  <>
    <h3 style={{gridColumnStart: "1", gridColumnEnd: "3"}}>{pokemon.id} {pokemon.name}</h3>
    <div>
      <h4>Type:</h4>
      <ul style={{textAlign: "left"}}>
        {pokemon.types.map(({type}) => (<li>{type.name}</li>))}
      </ul>
    </div>
    <div>
    <h4>Moves:</h4>
      <ul style={{textAlign: "left"}}>
        {pokemon.moves
        .slice(offset, offset + 4)
        .map(({move}) => (<li>{move.name}</li>))}
      </ul>
    </div>
    <h4>Base Stats
    <br/>
      HP:{pokemon.stats[0].base_stat} | Attack:{pokemon.stats[1].base_stat} | Defense:{pokemon.stats[2].base_stat} 
      <br/>
      lbs: {pokemon.weight} | in: {pokemon.height}
      <br/>
      XP: {pokemon.base_experience}</h4>
    <img src={pokemon.sprites.front_default} alt="Image of Pokemon" className="pokemon" />
    <br />
    
  </>
)
}

export default PokemonData;