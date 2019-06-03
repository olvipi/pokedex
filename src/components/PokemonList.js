import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const pokemons = props.pokemons;
  return (
    <div className="col-md-9 row">
      {pokemons ? (
        <div className="row">
          {pokemons.map(pokemon => (
            <div key={pokemon.name} className="col-12 col-md-6 col-lg-4">
              <PokemonCard name={pokemon.name} />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="mx-auto mt-5 my-md-auto">The list is loading ...</h3>
      )}
    </div>
  );
}
