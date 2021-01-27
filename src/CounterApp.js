import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

  const [ counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    // el setCounter tiene 2 manera de actualizar el estado de counter
    // Manera 1:
    setCounter(counter + 1)
    // Manera 2:
    // setCounter( (c) => c + 1 )
  }

  // handleReset
  const handleReset = () => {
    setCounter(value)
  }

  // handleSub
  const handleSub = () => setCounter(counter - 1)

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSub }>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
