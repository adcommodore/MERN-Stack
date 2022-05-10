import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{setPokemonData(response.data.results)})
        .catch(error=>{console.log(error)})
    }, []);

  return (
    <div>
      <button>Fetch Pokemon</button>
      <ul>
        {pokemonData.length > 0 && pokemonData.map((pokemonData, index) =>{
          return (<div key={ index }>{ pokemonData.name }</div>)
        })}

      </ul>
    </div>
  )};


export default App;
