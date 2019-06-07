import React, { useState, useEffect } from "react";
import axios from "axios";
import uniqObjInArr from "../utils/uniqObjInArr"
import Navigation from "./Navigation";
import SetLimit from "./SetLimit";
import Search from "./Search";
import PokemonList from "./PokemonList";
import SetType from "./SetType";


export default function Main() {
  const url = "https://pokeapi.co/api/v2/";
  const [pokemonsAll, setPokemonsAll] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [pokemonsForDisplay, setPokemonsForDisplay] = useState([]);
  const [limit, setLimit] = useState(10);
  const [firstItem, setFirstItem] = useState(0);
  const [type, setType] = useState({});
  const [check, setCheck] = useState(false);
  const [filteredByTypes, setFilteredByTypes] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredByNames, setFilteredByNames] = useState([]);

  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy"
  ];

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

  const onSetLimit = e => {
    setLimit(parseInt(e));
  };

  const onIncrease = () => {
    firstItem < tempList.length - limit
      ? setFirstItem(firstItem + limit)
      : setFirstItem(tempList.length - limit);
  };

  const onDecrease = () => {
    firstItem > limit ? setFirstItem(firstItem - limit) : setFirstItem(0);
  };

  const onSearch = e => {
    setQuery(e.toLowerCase().trim());
  };

  const onSetType = e => {
    setType(e);
    setCheck(e.checked);
  };

  //Download data for all Pokemons
  useEffect(() => {
    (async function fetchAllPokemonsList() {
      const res = await axios(`${url}pokemon/?limit=1000`);
      setPokemonsAll(res.data["results"]);
    })();
  }, []);

  //Download data by type
  useEffect(() => {
    if(type.name !== undefined){
    (async function fetchPokemonsTypes() {
      const res = await axios(`${url}type/${type.name}/`);
      const resData = res.data["pokemon"].map(item => item.pokemon);
      if (type.checked) {
        setFilteredByTypes(filteredByTypes => filteredByTypes.concat(resData));
      } else if (!type.checked) {
        setFilteredByTypes(filteredByTypes =>
          filteredByTypes.filter(
            i => !resData.map(j => j.name).includes(i.name)
          )
        );
      }
    })();}
  }, [type, check]);

  //Make default list
  useEffect(() => {
    setTempList(pokemonsAll);
    setFirstItem(0);
  }, [pokemonsAll]);

  // Cut arrays to display
  useEffect(() => {
    setPokemonsForDisplay(tempList.slice(firstItem, firstItem + limit));
  }, [limit, firstItem, tempList]);

  //Filter by name
  useEffect(() => {
    setFilteredByNames(
      pokemonsAll.filter(pokemon => {
        return pokemon.name.indexOf(query) > -1;
      })
    );
  }, [pokemonsAll, query]);

  //Prepare to display filter by name
  useEffect(() => {
    if (query.length > 2) {
      setTempList(filteredByNames);
      setFirstItem(0);
    } else {
      setTempList(pokemonsAll);
      setFirstItem(0);
    }
  }, [filteredByNames, query.length, pokemonsAll]);

  // Prepare to display filter by type
  useEffect(() => {
    if (filteredByTypes.length > 0) {
      function compare (a, b){ 
        return a.url.split("/")[a.url.split("/").length - 2] - b.url.split("/")[b.url.split("/").length - 2];
      };
    
      const sorted = filteredByTypes.sort(compare);

      const reduced = uniqObjInArr(sorted);
      
      setTempList(reduced)
      setFirstItem(0);
    } else {
      setTempList(pokemonsAll);
      setFirstItem(0);
    }
  }, [filteredByTypes, pokemonsAll]);

  return (
    <div className="my-5">
      <div className="row">
        <div className="col-md-3">
          <Navigation
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            firstItem={firstItem}
            limit={limit}
            end={tempList.length}
          />  
          <SetLimit onSetLimit={onSetLimit} />
          <Search onChangeInput={onSearch} />
          <SetType onSetType={onSetType} types={types} colors={colors} />
        </div>
        <PokemonList pokemonsForDisplay={pokemonsForDisplay} colors={colors} />
      </div>
    </div>
  );
}
