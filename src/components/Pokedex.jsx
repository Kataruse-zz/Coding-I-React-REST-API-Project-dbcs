import React, { useState } from 'react';
import "./Pokedex.css"

export default function Pokedex({id, name, sprites, setCurrentPage, setId, setToggle2}) {
    const [toggle, setToggle] = useState("maroon");

    const handleToggle = () => {
        if(toggle == "maroon") {
            setToggle("grey")
            setId(id)
            setToggle2("black")
            setCurrentPage(1)
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