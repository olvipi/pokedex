import React, {useState, useEffect} from "react";
import axios from "axios";
import Navigation from "./Navigation";
import SetLimit from "./SetLimit";
import Search from "./Search";
import PokemonList from "./PokemonList";
import SetType from "./SetType";

export default function Main() {
  const url = "https://pokeapi.co/api/v2/";
  const [pokemonsAll, setPokemonsAll] = useState([]);
  const [pokemonsForDisplay, setPokemonsForDisplay] = useState([]);
  const [limit, setLimit] = useState(10);
  const [firstItem, setFirstItem] = useState(0);
  const [query, setQuery] = useState("");
  const [/*type*/, setType] = useState(null);
  // const [filteredByTypes, setFilteredByTypes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [end, setEnd] = useState(0);

  const colors = {
    normal: "black",
    fighting: "darkRed",
    flying: "lightBlue",
    poison: "purple",
    ground: "peru",
    rock: "grey",
    bug: "green",
    ghost: "thistle",
    steel: "lightSteelBlue",
    fire: "orangeRed",
    water: "deepSkyBlue",
    grass: "limeGreen",
    electric: "gold",
    psychic: "magenta",
    ice: "skyBlue",
    dragon: "blueViolet",
    dark: "maroon",
    fairy: "lightPink"
  };

  //Download data for all Pokemon
  useEffect(() => {
    async function fetchAllPokemonsList() {
      const res = await axios(`${url}pokemon/?limit=1000`);
      setPokemonsAll(res.data["results"]);
    }
    fetchAllPokemonsList();
    console.log("Download data for all Pokemon");
  }, []);


  //Download data by type
  // useEffect(() => {
  //   (async function fetchPokemonsTypes() {
  //     if (type) {
  //       const res = await axios(`${url}type/${type.name}/`);
  //       if (type.checked) setFilteredByTypes(res.data["pokemon"].map(item => item.pokemon))
  //     }
  //   })();
  //   // fetchPokemonsTypes();
  //
  //   console.log("Download data by type");
  // }, [type]);

  // Cut arrays to display
  useEffect(() => {
    setEnd(pokemonsAll.length);
    setPokemonsForDisplay(pokemonsAll.slice(firstItem, firstItem + limit));
    console.log("Cut arrays to display");
  }, [limit, firstItem, pokemonsAll]);

  //Filter by name
  useEffect(() => {
    setFilteredList(
      pokemonsAll.filter(pokemon => {
        return pokemon.name.indexOf(query) > -1;
      })
    );
    if (query.length > 2) {
      setEnd(filteredList.length);
      setFirstItem(0);
    } else {
      setEnd(pokemonsAll.length);
    }
    console.log("Filter by name");

  }, [query, filteredList.length, pokemonsAll]);

  //Filter by type
  // useEffect(() => {
  //   if (type && type.checked) setPokemonsForDisplay(filteredByTypes.slice(firstItem, firstItem + limit));
  //   console.log(filteredByTypes);
  // }, [filteredByTypes, type]);

  const onSetLimit = e => {
    setLimit(parseInt(e));
  };

  const onIncrease = () => {
    firstItem < end - limit ? setFirstItem(firstItem + limit) : setFirstItem(end - limit);
  };

  const onDecrease = () => {
    firstItem > limit ? setFirstItem(firstItem - limit) : setFirstItem(0);
  };

  const onSearch = e => {
    setQuery(e.toLowerCase().trim());
  };

  const onSetType = e => {
    setType(e);
  };

  return (
    <div className='my-5'>
      <div className='row'>
        <div className='col-md-3'>
          <Navigation
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            firstItem={firstItem}
            limit={limit}
            end={end}
          />
          <SetLimit onSetLimit={onSetLimit}/>
          <Search onChangeInput={onSearch}/>
          <SetType onSetType={onSetType} colors={colors}/>
        </div>
        <PokemonList
          pokemonsForDisplay={
            query.length < 3 ? pokemonsForDisplay : filteredList
          }
          colors={colors}
        />
      </div>
    </div>
  );
};
