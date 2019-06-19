import React, { useState, useEffect } from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import Animation from './Animation'

const PokemonCard = props => {
  const [imageLoading, setImageLoading] = useState(true)

  const localStore = useLocalStore(() => ({
    pokemonTypes: null,
    imageUrl: null,
    pokemonStats: null,
    setRes (data) {
      this.pokemonTypes = data.types
      this.imageUrl = data.sprites['front_default']
      this.pokemonStats = data.stats.reverse()
    }
  }))

  useEffect(() => {
    function getPokemonData () {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
        .then(res => res.json())
        .then(data => localStore.setRes(data))
    }
    getPokemonData()
  }, [localStore, props.name])

  const imageStyle = imageLoading ? { display: 'none' } : { display: 'block' }

  const onImageLoaded = () => {
    setImageLoading(false)
  }

  return useObserver(() => (
    <div className='card mt-2'>
      <div className='card-header d-flex justify-content-between px-2'>
        <div className='align-self-center text-capitalize font-weight-bold font-italic text-left'>
          {props.name}
        </div>
        {imageLoading ? <Animation /> : null}
        <img
          src={localStore.imageUrl ? localStore.imageUrl : './img/no-image.png'}
          alt={props.name}
          style={imageStyle}
          onLoad={onImageLoaded}
        />
      </div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <span>Types:</span>
          <div className='d-inline-flex justify-content-end'>
            {localStore.pokemonTypes
              ? localStore.pokemonTypes.map(type => (
                  <div
                    key={type.type.name}
                    className='border border-white badge badge-pill text-white text-capitalize'
                    style={{
                      backgroundColor: `${props.store._colors[type.type.name]}`
                    }}
                  >
                    {type.type.name}
                  </div>
                ))
              : null}
          </div>
        </div>
        {localStore.pokemonStats
          ? localStore.pokemonStats.map(stat => (
              <div
                className='d-flex justify-content-between'
                key={stat.stat.name}
              >
                <span className='text-capitalize'>{stat.stat.name}:</span>
                <span>{stat['base_stat']}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  ))
}
export default PokemonCard
