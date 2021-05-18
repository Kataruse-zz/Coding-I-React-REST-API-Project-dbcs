import React, { useState } from 'react';
import './PokemonData.css';

function PokemonData({ pokemon }) {
  const [offset, setOffset] = useState(0);

  const nextmoves = () => {
    if(offset < pokemon.moves.length - 4) {
        setOffset(offset + 4)
      }
  }
  
  const lastmoves = () => {
    if(offset > 0) {
          setOffset(offset - 4)
      }
  }

return (
  <>
    <div className ="pkInfo">
      <img src={pokemon.sprites.front_default} alt="Image of Pokemon" className="pkSprite"/>
      <h3 style={{gridColumnStart: "1", gridColumnEnd: "3"}}>{pokemon.id} {pokemon.name}</h3><b>
      HP:{pokemon.stats[0].base_stat} | Attack:{pokemon.stats[1].base_stat} | Defense:{pokemon.stats[2].base_stat} | 
      lbs: {pokemon.weight} | ft: {pokemon.height}</b>
      </div>
    <div className="typesMoves">
      <p><strong>Type:</strong> {pokemon.types.slice(0,4).map(type => `${type.type.name}, `)} </p>
      <p><strong>Moves:</strong> {pokemon.moves.slice(offset, offset + 4).map(move => `${move.move.name}, `)} </p>
      <button onClick={lastmoves}>Last</button><button onClick={nextmoves}>Next</button>
    </div>
  </>
)
}

export default PokemonData;