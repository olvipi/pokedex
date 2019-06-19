import React from 'react'
import appStore from './store/Store'
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Navigation from './components//Navigation'
import SetLimit from './components//SetLimit'
import Search from './components//Search'
import PokemonList from './components//PokemonList'
import SetType from './components//SetType'

const App = () => {
  appStore.getAllPokemonsList()

  return (
    <>
      <Nav />
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
      <Footer />
    </>
  )
}
export default App
