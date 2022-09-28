import React, {useState} from 'react'
import SearchById from '../SearchById'
import SearchByName from '../SearchByName'

import "./index.css"

function SearchSelection() {
    // Step 1 = Seleccion'
    // Step 2 = ID
    // Step 3 = Nombre
    const [ step, setStep] = useState(1)

  return (
    <div className='searchselection__container'>
        {step === 1 &&(
            <div>
                <p className='searchselection__text'>Buscar por ID o por Nombre</p>
                <button className='searchselection__button' onClick={()=>{setStep(2)}}>ID</button>
                <button className='searchselection__button' onClick={()=>{setStep(3)}}>Nombre</button>
            </div>
        )}

        {step === 2 &&(
            <div>
                <div className='pokemon__close' onClick={()=>{setStep(1)}}>Atras</div>
                <SearchById />
            </div>
        )}
        
        {step === 3 &&(
            <div>
                <div className='pokemon__close' onClick={()=>{setStep(1)}}>Atras</div>
                <SearchByName />
            </div>
        )}

    </div>
  )
}

export default SearchSelection