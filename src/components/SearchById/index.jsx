import React, { useState } from "react";
import "./index.css";

import Loader from '../Loader'
import PokemonShow from '../PokemonShow'

function SearchById() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(false);
  const [id, setId] = useState(1)
  const [ singlePokeData, setSinglePokeData] = useState({})

  const fetchById = () => {
    console.log()
    setError(false)
    if (id > 0 && id < 1154) {
      setLoading(true);
      setError(false)
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSinglePokeData(data);
          setLoading(false);
          setStep(2)
        });
    } else {
      setError(true)
    }
  }

  return (
    <div>
      {loading && <Loader />}
      { step === 1 && (
            <div>
                <p className='searchbyname__text'>Buscar por ID</p>
                <input type="number" name="Search" id="" className="searchbyname__input" min="1" max="1154"  onChange={(e)=>{setId(e.target.value)}}  />
                <button className='searchbyname__button' onClick={fetchById} >Buscar</button>
                <p className='searchbyname__text-h3'>Puedes elegir un valor entre 1 y 1154</p>
                { error && (<p className="searchbyid__text-error">Has colocado un numero fuera del rango</p>)}
            </div>
        )}
      {step === 2 && (<PokemonShow data={singlePokeData}/>)}
    </div>
  );
}

export default SearchById;
