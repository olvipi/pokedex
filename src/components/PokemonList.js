import React from 'react'
import { observer } from 'mobx-react-lite'
import appStore from '../store/Store'
import PokemonCard from './PokemonCard'

const PokemonList = observer(() => {
  return (
    <div className='col-md-9'>
      <div className='row'>
        {appStore.pokemonsForDisplay ? (
          appStore.pokemonsForDisplay.map(pokemon => (
            <div key={pokemon.name} className='col-12 col-md-6 col-lg-4'>
              <PokemonCard
                name={pokemon.name}
                colors={appStore._colors}
                store={appStore}
              />
            </div>
          ))
        ) : (
          <h3 className='mx-auto mt-5 my-md-auto'>The list is loading ...</h3>
        )}
      </div>
    </div>
  )
})
export default PokemonList
