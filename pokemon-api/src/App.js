import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [ pokemon, setPokemon ] = useState({});

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        console.log(response);
        response.json()
          .then((jsonResponse) => {
            console.log(jsonResponse);
            setPokemon(jsonResponse.results);
          })
          .catch((jsonError) => {
            console.log(jsonError);
          })
      })
  }, []);

  
  return (
    <div style={{ textAlign: "center"}}>
      <button>Fetch Pokemon</button>
      <ul>
        {pokemon.length > 0 && pokemon.map((pokemon, index) =>{
          return (<div key={ index }>{ pokemon.name }</div>)
        })}
      </ul>
      
    </div>
  );
}

export default App;
