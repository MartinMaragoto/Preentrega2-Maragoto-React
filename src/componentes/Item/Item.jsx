import './Item.css'; 
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>

        <img className='productImage' src= {img} alt= {nombre} />
        <h3 className='productName'>Nombre: {nombre} </h3>
        <p className='productPrice'>Precio: {precio} </p>
        <p className='productID'>ID: {id} </p>
        <Link className='productButton' to = {`/categoria/${id}`}> Ver Detalles</Link>
        {/* <button className='productButton'> Ver Detalles </button> */}
    </div>
  )
}

export default Item