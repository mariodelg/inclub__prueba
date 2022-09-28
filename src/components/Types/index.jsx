import React from "react";
import "./index.css"

function Types(props) {
  return (
    <div className="types__container">
      {props.types === "grass" && (
        <p className="types__grass">Planta</p>
      )}
      {props.types === "poison" && (
        <p className="types__poison">Veneno</p>
      )}
      {props.types === "normal" && (
        <p className="types__normal">Normal</p>
      )}
      {props.types === "fighting" && (
        <p className="types__fighting">Lucha</p>
      )}
      {props.types === "flying" && (
        <p className="types__flying">Volador</p>
      )}
      {props.types === "ground" && (
        <p className="types__ground">Tierra</p>
      )}
      {props.types === "rock" && (
        <p className="types__rock">Roca</p>
      )}
      {props.types === "bug" && <p className="types__bug">Bicho</p>}
      {props.types === "ghost" && (
        <p className="types__ghost">Fantasma</p>
      )}
      {props.types === "steel" && (
        <p className="types__steel">Acero</p>
      )}
      {props.types === "fire" && (
        <p className="types__fire">Fuego</p>
      )}
      {props.types === "water" && (
        <p className="types__water">Agua</p>
      )}
      {props.types === "electric" && (
        <p className="types__electric">Eléctrico</p>
      )}
      {props.types === "psychic" && (
        <p className="types__psychic">Psíquico</p>
      )}
      {props.types === "ice" && <p className="types__ice">Hielo</p>}
      {props.types === "dragon" && (
        <p className="types__dragon">Dragón</p>
      )}
      {props.types === "dark" && (
        <p className="types__dark">Siniestro</p>
      )}
      {props.types === "fairy" && (
        <p className="types__fairy">Hada</p>
      )}
      {props.types === "unknown" && (
        <p className="types__unknown">???</p>
      )}
      {props.types === "shadow" && (
        <p className="types__shadow">Oscuro</p>
      )}
    </div>
  );
}

export default Types;
