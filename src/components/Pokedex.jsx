import React, { useState, useEffect } from 'react';
import "./Pokedex.css"

export default function Pokedex({pokemon}) {
    const [toggle, setToggle] = useState("yellow");

    const handleToggle = () => {
        if(toggle == "yellow") {
            setToggle("blue")
        } else {
            setToggle("yellow")
        }
    }

    return (
        <div onClick={handleToggle} className={`category ${toggle}`}>
            <h3>{pokemon.id} {pokemon.name}</h3>
            <img src={pokemon.sprites.front_default}/>
        </div>
    )
}

        {isLoaded && (
          <Pokedex pokemon={pokemon} />
        )}

export default Pokedex;