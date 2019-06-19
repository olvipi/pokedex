import React from 'react'
import appStore from '../store/Store'

const SetLimit = () => {
  const onSetLimit = e => appStore.onSetLimit(e.target.value)

  return (
    <form className='mt-3'>
      <label htmlFor='selectLimit'>Select the amount of cards per page</label>
      <select className='form-control' id='selectLimit' onChange={onSetLimit}>
        <option value='10' defaultValue>
          10
        </option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
    </form>
  )
}
export default SetLimit
