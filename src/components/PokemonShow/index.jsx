import React from 'react'
import './index.css'

import Pdf from "react-to-pdf";

import Types from '../Types'

const ref = React.createRef();

function PokemonShow(props) {
    console.log(props)
  return (
    <div className="pokemon__container" ref={ref}>
    <div className="pokemon__data">
      <img
        src={props.data.sprites.front_default}
        alt="pokemon img"
        width="200"
        height="200"
        className="pokemon__img"
      ></img>
      <p className="pokemon__text">Nombre: {props.data.name}</p>
      <p className="pokemon__text">ID Pokedex:  {props.data.id} </p>
      <p className="pokemon__text">
        Peso: {props.data.weight / 10} kgs
      </p>
      <p className="pokemon__text">
        Altura: {props.data.height / 10} m 
      </p>
    </div>
    <div className="pokemon__detaileData">
      <p>Tipo: </p>
       {props.data.types.map((type) => {
        console.log(type);
        return <Types types={type.type.name} />;
      })}
        <p className="pokemon__text">Experiencia base: {props.data.base_experience} XP</p>

        <p className="pokemon__text">Stats base:</p>
        <p className="pokemon__text">HP:  {props.data.stats[0].base_stat}  -  Ataque: {props.data.stats[1].base_stat}</p>
        <p className="pokemon__text">Defensa:  {props.data.stats[2].base_stat}  -  Ataque E.: {props.data.stats[3].base_stat}</p>
        <p className="pokemon__text">Defensa E.:  {props.data.stats[4].base_stat}  -  Velocidad: {props.data.stats[5].base_stat}</p>
        
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="pokemon__button-pdf">PDF del pokemon</button>}
      </Pdf>
    </div>
  </div>
  )
}

export default PokemonShow