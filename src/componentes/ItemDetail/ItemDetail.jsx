import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img className='productImage' src={img} alt= {nombre} />
      <p> Esta es una descripción del producto </p>
    </div>
  )
}

export default ItemDetail