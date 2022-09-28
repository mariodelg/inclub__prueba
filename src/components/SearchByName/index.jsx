import React, {useEffect, useState} from 'react'
import Loader from '../Loader'
import PokemonShow from '../PokemonShow'
import "./index.css"

import { CSVLink } from "react-csv";

function SearchByName() {
    const [ allData, setAllData] = useState([])
    const [ filtered, setFiltered] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ inputText, setInputText ] = useState("")
    const [singlePokeData, setSinglePokeData] = useState({});

    // Step 1 = Cuadro de busqueda
    // Step 2 = Lista
    // Step 3 = Vista pokemon
    const [ step, setStep ] = useState(1)
    

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
          .then((response) => response.json())
          .then((data) => {
            setAllData(data.results);
            setLoading(false);
            console.log(data)
          });
      }, []);
        

      let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    
      const filterBySearch = () => {
        // Access input value
    
        // Create copy of item list
        let updatedList = [...allData];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFiltered(updatedList);
        console.log(filtered)
        setStep(2)
      };

      const fetchSinglePokemon = (url) => {
        console.log(url)
        if (url !== "") {
          setLoading(true);
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setSinglePokeData(data);
              setLoading(false);
              setStep(3)
            });
        }
      }

  return (
    <div>
        { loading && (
            <Loader />
        )}

        { step === 1 && (
            <div>
                <p className='searchbyname__text'>Buscar por nombre</p>
                <input type="text" name="Search" id="" className="searchbyname__input" onChange={inputHandler} />
                <button className='searchbyname__button' onClick={filterBySearch}>Buscar</button>
                <p className='searchbyname__text-h2'>Numero actual de pokemones: {allData.length}</p>
                <p className='searchbyname__text-h3'>Tip: Si dejas la casilla en blanco te devolvera una lista con todos los pokemones</p>

                <CSVLink className="searchbyname__text-h3" data={allData} >Descargar un CSV con los Pokemon</CSVLink>
            </div>
        )}

        { step === 2 && (filtered.map((item) => {
                                return (
                                    <div className="screen__item" key={item.name}>
                                      <p
                                         onClick={() => {
                                          fetchSinglePokemon(item.url)
                                        }}
                                      >
                                        {item.name[0].toUpperCase() + item.name.slice(1)}
                                      </p>
                                    </div>
                                  );
        }))}


        {step === 3 && (<PokemonShow data={singlePokeData}/>)}
    </div>
  )
}

export default SearchByName