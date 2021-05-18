import React, { useState, useRef } from 'react';
import Pokedex from "./components/Pokedex";
import Searchpk from "./components/Searchpk";
import App from "./App.jsx";
import "./Search.css";

function Search() {
  const [currentPage, setCurrentPage] = useState(0);
  const [toggle2, setToggle2] = useState("maroon");
  const [id, setId] = useState(1);
  const name = useRef(null);

  const backButt = () => {
    setToggle2("maroon")
    setCurrentPage(0)
  }

  return (
    <>
      <main className={toggle2}>
        <header>
          {currentPage == 0 && (
            <>
              <img src="src/img/chadgameb.png" className="gameheader" />
              <Searchpk setId={setId} setCurrentPage={setCurrentPage} setToggle2={setToggle2} />
            </>
          )}
          {currentPage == 1 && (
            <>
              <img src="src/img/chadgame.png" className="appheader" />
            </>
          )}
        </header>
        {currentPage == 1 && (<App id={id} />)}
        {currentPage == 1 && (
          <>
            <button onClick={backButt}>Back to Dex</button>
          </>
        )}
      </main>
    </>
  )
}

export default Search;