import { observable, action, decorate, computed, runInAction } from 'mobx'

class Store {
  _url = 'https://pokeapi.co/api/v2/'
  _types = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy'
  ]
  _colors = {
    normal: 'black',
    fighting: 'darkRed',
    flying: 'lightBlue',
    poison: 'purple',
    ground: 'peru',
    rock: 'grey',
    bug: 'green',
    ghost: 'thistle',
    steel: 'lightSteelBlue',
    fire: 'orangeRed',
    water: 'deepSkyBlue',
    grass: 'limeGreen',
    electric: 'gold',
    psychic: 'magenta',
    ice: 'skyBlue',
    dragon: 'blueViolet',
    dark: 'maroon',
    fairy: 'lightPink'
  }
  pokemonsAll = null
  tempList = []
  firstItem = 0
  limit = 10
  query = ''
  imageUrl = null
  pokemonTypes = null
  pokemonStats = null
  type = {}
  check = false
  currentDataByType = null
  filteredByTypes = []

  //Download data for all Pokemons
  getAllPokemonsList () {
    fetch(`${this._url}pokemon/?limit=1000`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          runInAction(() => {
            this.tempList = this.pokemonsAll = data.results
          })
        }
      })
  }

  // Cut arrays to display
  get pokemonsForDisplay () {
    return this.tempList
      ? this.tempList.slice(this.firstItem, this.firstItem + this.limit)
      : []
  }
  onSetLimit (e) {
    this.limit = parseInt(e)
  }

  get end () {
    return this.tempList ? this.tempList.length : 0
  }

  get lastItem () {
    let lastItem = this.firstItem + this.limit
    if (lastItem > this.end) {
      lastItem = this.end
    }
    return lastItem
  }

  onIncrease () {
    this.firstItem =
      this.firstItem < this.tempList.length - this.limit
        ? this.firstItem + this.limit
        : this.tempList.length - this.limit
  }

  onDecrease () {
    this.firstItem =
      this.firstItem > this.limit ? this.firstItem - this.limit : 0
  }

  //filter by types
  onSearch (e) {
    this.query = e
    const matchesFilter = new RegExp(this.query, 'i')
    this.tempList = this.pokemonsAll.filter(
      ({ name }) => !this.query || matchesFilter.test(name)
    )
  }

  onSetType (e) {
    this.type = e
    this.check = e.checked
  }

  //Download data by type
  getPokemonsTypes () {
    fetch(`${this._url}type/${this.type.name}/`)
      .then(res => res.json())
      .then(data => {
        this.filteringByType(data)
      })
  }

  // Prepare to display filter by type
  filteringByType (data) {
    this.currentDataByType = data['pokemon'].map(item => item.pokemon)
    if (this.type.checked) {
      this.filteredByTypes = this.filteredByTypes.concat(this.currentDataByType)
    }
    if (!this.type.checked) {
      this.filteredByTypes = this.filteredByTypes.filter(
        i => !this.currentDataByType.map(j => j.name).includes(i.name)
      )
    }
    if (this.filteredByTypes.length > 0) {
      this.tempList = this.filteredByTypes
      this.firstItem = 0
    } else {
      this.tempList = this.pokemonsAll
      this.firstItem = 0
    }
  }
}

decorate(Store, {
  pokemonsAll: observable,
  getAllPokemonsList: action.bound,
  tempList: observable,
  pokemonsForDisplay: computed,
  firstItem: observable,
  limit: observable,
  onSetLimit: action,
  end: computed,
  onIncrease: action,
  onDecrease: action,
  lastItem: computed,
  query: observable,
  onSearch: action,
  type: observable,
  check: observable,
  filteredByTypes: observable,
  getPokemonsTypes: action.bound,
  filteringByType: action,
  onSetType: action,
  currentDataByType: observable
})

const appStore = new Store()

export default appStore
