import React from 'react'
import './CardWidget.css';
const CardWidget = () => {
    const imgCarrito = "pixelcarrito.png"
  return (

    <div className='divCartLogo'>
        <strong className='cartAmountNumber'>3</strong>
        <img className='cartLogo' src= {imgCarrito} alt="Imagen de un carro"/>
        
    </div>
  )
}

export default CardWidget