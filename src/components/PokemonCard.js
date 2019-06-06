import React, {useState, useEffect} from "react";
import Axios from "axios";
import Animation from "./Animation";

export default function PokemonCard(props) {
  const name = props.name;
  const url = `https://pokeapi.co/api/v2/pokemon/${props.name}/`;
  const [pokemonRes, setPokemonRes] = useState(null);
  const [imageUrl, setImageUrl] = useState(0);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  const imageStyle = imageLoading ? {display: "none"} : {display: "block"};

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
      setPokemonStats(pokemonRes.stats.reverse());
    }
  }, [pokemonRes]);

  const onImageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div className='card mt-2'>
      <div className='card-header d-flex justify-content-between px-2'>
        <div className='align-self-center text-capitalize font-weight-bold font-italic text-left'>
          {name}
        </div>
        {imageLoading ? <Animation/> : null}
        <img
          src={imageUrl || "./img/no-image.png"}
          alt={name}
          style={imageStyle}
          onLoad={onImageLoaded}
        />
      </div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <span>Types:</span>
          <div className='d-inline-flex justify-content-end'>
            {pokemonTypes.map(pokemonType => (
              <div
                key={pokemonType.type.name}
                className='border border-white badge badge-pill text-white text-capitalize'
                style={{
                  backgroundColor: `${props.colors[pokemonType.type.name]}`
                }}
              >
                {pokemonType.type.name}
              </div>
            ))}
          </div>
        </div>

        {pokemonStats.map(stat => (
          <div className='d-flex justify-content-between' key={stat.stat.name}>
            <span className='text-capitalize'>{stat.stat.name}:</span>
            <span>{stat["base_stat"]}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
