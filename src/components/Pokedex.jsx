import React, { useState, useEffect } from 'react';
import "./Pokedex.css"

export default function Pokedex({id, name, sprites}) {
    const [toggle, setToggle] = useState("maroon");

    const handleToggle = () => {
        if(toggle == "maroon") {
            setToggle("lightblue")
        } else {
            setToggle("maroon")
        }
    }

    return (
        <div onClick={handleToggle} className={`pokedexbackground ${toggle}`}>
            <h2>{id} {name}</h2>
            <img src={sprites}/>
        </div>
    )
}