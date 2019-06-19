import React from 'react'
import appStore from '../store/Store'

const Search = () => {
  const onSubmit = e => e.preventDefault()

  const onSearch = e => appStore.onSearch(e.target.value)

  return (
    <form className='mt-3' onSubmit={onSubmit}>
      <label htmlFor='search'>Enter the Pokemon name for the search</label>
      <input
        type='text'
        id='search'
        placeholder='Pokemon'
        className='form-control'
        onChange={onSearch}
      />
    </form>
  )
}
export default Search
