import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {

  return (
    <div className="col-md-9">
      <div className="row">
        {props.pokemonsForDisplay ? (
          props.pokemonsForDisplay.map(pokemon => (
            <div key={pokemon.name} className="col-12 col-md-6 col-lg-4">
              <PokemonCard name={pokemon.name} colors={props.colors} />
            </div>
          ))
        ) : (
          <h3 className="mx-auto mt-5 my-md-auto">The list is loading ...</h3>
        )}
      </div>
    </div>
  );
}
