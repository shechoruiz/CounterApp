// Functional Components
import React from 'react'
import PropTypes from 'prop-types'


const PrimeraApp = ( {saludo} ) => {

  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  )
}

// Con los propTypes, definimos el tipo de la propiedad y si es obligatorio indicarlo al momento de crear el componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp