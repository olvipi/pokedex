import React from 'react'
import appStore from '../store/Store'

const SetType = () => {
  const onHandleSubmit = e => {
    e.preventDefault()
  }

  const onSetTypes = e => {
    appStore.onSetType(e.target)
    appStore.getPokemonsTypes()
  }

  return (
    <div className='card mt-3'>
      <div className='card-header'>Filter by types</div>
      <div className='card-body'>
        <form onSubmit={onHandleSubmit}>
          {appStore._types.map(type => (
            <div
              key={type}
              className='custom-control custom-checkbox badge-pill mb-1 text-white'
              style={{
                backgroundColor: `${appStore._colors[type]}`
              }}
            >
              <input
                type='checkbox'
                className='custom-control-input'
                id={type}
                name={type}
                onChange={onSetTypes}
              />
              <label
                className='custom-control-label text-capitalize'
                htmlFor={type}
              >
                {type}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}
export default SetType
