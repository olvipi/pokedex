import React from "react";
import PokemonCard from "./PokemonCard";

export default function Pokemon(props) {
  const pokemon = props.pokemon;
  return (
    <div className="col-md-9">
      {pokemon ? (
        <div className="mx-auto w-75">
          <PokemonCard name={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
}
