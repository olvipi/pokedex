import React, { useState, useEffect } from "react";
import Axios from "axios";
import Animation from "./Animation";

export default function PokemonCard(props) {
  const name = props.name;
  const url = `https://pokeapi.co/api/v2/pokemon/${props.name}/`;

  const [pokemonRes, setPokemonRes] = useState(null);
  const [imageUrl, setImageUrl] = useState(0);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonHp, setPokemonHp] = useState("");
  const [pokemonSpeed, setPokemonSpeed] = useState("");
  const [pokemonAttack, setPokemonAttack] = useState("");
  const [pokemonDefence, setPokemonDefence] = useState("");
  const [imageLoading, setImageLoading] = useState(true);

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

  let imageStyle = imageLoading ? { display: "none" } : { display: "block" };

  useEffect(() => {
    async function fetchPokemonRes() {
      const getPokemonRes = await Axios.get(url);
      setPokemonRes(getPokemonRes.data);
    }

    fetchPokemonRes();
  }, [url]);

  useEffect(() => {
    if (pokemonRes) {
      setPokemonTypes(pokemonRes.types);
      setImageUrl(pokemonRes.sprites["front_default"]);
      setPokemonStats(pokemonRes.stats);
      pokemonStats.map(stat => {
        if (stat.stat.name === "hp") {
          setPokemonHp(stat["base_stat"]);
        } else if (stat.stat.name === "speed") {
          setPokemonSpeed(stat["base_stat"]);
        } else if (stat.stat.name === "attack") {
          setPokemonAttack(stat["base_stat"]);
        } else if (stat.stat.name === "defense") {
          setPokemonDefence(stat["base_stat"]);
        }
      });
    }
  }, [pokemonRes, pokemonStats]);

  const onImageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div className="card mt-2">
      <div className="card-header d-flex justify-content-between px-2">
        <div className="align-self-center text-capitalize font-weight-bold font-italic text-left">
          {name}
        </div>
        {imageLoading ? <Animation /> : null}
        <img
          src={imageUrl || "./img/no-image.png"}
          alt={name}
          style={imageStyle}
          onLoad={onImageLoaded}
        />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span>Types:</span>
          <div className="d-inline-flex justify-content-end">
            {pokemonTypes.map(pokemonType => (
              <div
                key={pokemonType.type.name}
                className="border border-white badge badge-pill text-white text-capitalize"
                style={{
                  backgroundColor: `${colors[pokemonType.type.name]}`
                }}
              >
                {pokemonType.type.name}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <span>Hp:</span>
          <span>{pokemonHp}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Speed:</span>
          <span>{pokemonSpeed}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Attack:</span>
          <span>{pokemonAttack}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Defense:</span>
          <span>{pokemonDefence}</span>
        </div>
      </div>
    </div>
  );
}
