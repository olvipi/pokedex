import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PokemonList from './PokemonList'

it('PokemonList renders without crashing', () => {
  const div1 = document.createElement('div')
  ReactDOM.render(<PokemonList />, div1)
  ReactDOM.unmountComponentAtNode(div1)
})

it('PokemonList renders without crashing', () => {
  shallow(<PokemonList />)
})
