import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navigation from "./Navigation";
import SetLimit from "./SetLimit";
import Search from "./Search";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

export default function Main() {
  const url = "https://pokeapi.co/api/v2/";
  const [pokemons, setPokemons] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPokemonList() {
      let urlPokemonsAll = `${url}pokemon/?offset=${offset}&limit=${limit}`;
      const res = await Axios.get(urlPokemonsAll);
      setPokemons(res.data["results"]);
    }
    fetchPokemonList();
  }, [limit, offset]);

  useEffect(() => {
    async function fetchPokemonByName() {
      const searchUrl = `${url}pokemon/${search.toLowerCase()}/`;
      if (searchUrl.includes("pokemon//")) return;
      const resByName = await Axios.get(searchUrl);
      setPokemon(resByName.data);
    }
    fetchPokemonByName();
  }, [search]);

  const onSetLimit = e => {
    setLimit(parseInt(e));
  };

  const onSetOffsetIncrease = () => {
    offset < 964 - limit ? setOffset(offset + limit) : setOffset(950);
  };

  const onSetOffsetDecrease = () => {
    offset > limit ? setOffset(offset - limit) : setOffset(0);
  };

  const onSearch = e => {
    setSearch(e);
  };

  return (
    <div className="my-5">
      <div className="row">
        <div className="col-md-3">
          <Navigation
            onSetOffsetIncrease={onSetOffsetIncrease}
            onSetOffsetDecrease={onSetOffsetDecrease}
            firstItem={offset}
            lastItem={limit}
          />

          <Search onChangeInput={onSearch} />

          <SetLimit onSetLimit={onSetLimit} />
        </div>
        {!pokemon || search === "" ? (
          <PokemonList pokemons={pokemons} />
        ) : (
          <Pokemon pokemon={pokemon} />
        )}
      </div>
    </div>
  );
}
