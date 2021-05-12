import React, {useState, useEffect} from "react"
import App from './App'
import Game from './Game'

function Load() {
    const [currentPage, setCurrentPage] = useState(0);
    const [id, setId] = useState(0)

    const handleNav = (page) => {
        setCurrentPage(page)
    }

    const handleLoadPokemon = (pkID) => {
        setId(pkID);
        setCurrentPage(1);
    } 

    return (
    <>
        <Header title="Super Quiz" handleNav={handleNav} />
        {currentPage == 0 && (<App handleLoadCategory={handleLoadCategory} />)}
        {currentPage == 1 && (<Game />)}
    </>)
}

export default App;