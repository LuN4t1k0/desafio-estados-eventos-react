import React from 'react'

const Boton = () => {
const handleSubmit = (e) => {
  e.preventDefault()


}
  return (
    <button type='submit' onSubmit={handleSubmit}>Ingresar</button>
   
  )
}

export default Boton