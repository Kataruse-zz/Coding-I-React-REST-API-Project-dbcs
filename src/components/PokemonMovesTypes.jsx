import React, { useState, useEffect } from 'react';
import './PokemonMovesTypes.css';

function PokemonMovesTypes({ pokemon }) {

const [offset, setOffset] = useState(0);

return (
  <>
    <div className="types">
      <p><strong>Type:</strong> {pokemon.types.slice(0,4).map(type => `${type.type.name}, `)} </p>
    </div>
    <div className="moves">
      <p><strong>Moves:</strong> {pokemon.moves.slice(0,4).map(move => `${move.move.name}, `)} </p>
    </div>
  </>
)
}

export default PokemonMovesTypes;