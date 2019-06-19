import React from 'react'
import { observer } from 'mobx-react-lite'
import appStore from '../store/Store'

import Navigation from './Navigation'
import SetLimit from './SetLimit'
import Search from './Search'
import PokemonList from './PokemonList'
import SetType from './SetType'

const Main = observer(() => {
  appStore.getAllPokemonsList()

  return (
    <div className='my-5'>
      <div className='row'>
        <div className='col-md-3'>
          <Navigation />
          <SetLimit />
          <Search />
          <SetType />
        </div>
        <PokemonList />
      </div>
    </div>
  )
})

export default Main
