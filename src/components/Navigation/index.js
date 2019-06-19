import React from 'react'
import './navigation.css'
import { observer } from 'mobx-react-lite'
import appStore from '../../store/Store'

const Navigation = observer(() => {
  const onIncrease = () => appStore.onIncrease()
  const onDecrease = () => appStore.onDecrease()
  const noSelection = e => e.preventDefault()

  //Different variables for empty search
  const textTrue = {
    start: `${appStore.firstItem + 1} - ${appStore.lastItem}`,
    end: `of ${appStore.end}`
  }
  const textFalse = { start: 'There are no', end: 'for display' }

  return (
    <div className='d-flex justify-content-around mt-2'>
      <span
        className='arrow-prev align-self-center ml-5'
        onClick={onDecrease}
        onMouseDown={noSelection}
      >
        Prev
      </span>
      <div
        className='text-center'
        style={appStore.end === 0 ? { color: 'red' } : { color: 'black' }}
      >
        {appStore.end === 0 ? textFalse.start : textTrue.start}
        <br />
        Pokemon{appStore.end === 1 ? `` : `s`}
        <br />
        {appStore.end === 0 ? textFalse.end : textTrue.end}
      </div>
      <span
        className='arrow-next align-self-center mr-5'
        onClick={onIncrease}
        onMouseDown={noSelection}
      >
        Next
      </span>
    </div>
  )
})
export default Navigation
