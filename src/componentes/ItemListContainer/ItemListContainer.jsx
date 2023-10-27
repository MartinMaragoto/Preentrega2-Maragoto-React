import { useState, useEffect } from 'react';
import { getProductos, getProductType } from '../../asyncmock';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams ()

  useEffect(() => {

    const functionProductos = idCategoria ? getProductType : getProductos

    functionProductos (idCategoria)
    .then (res => setProductos(res))

  }, [idCategoria])

  return (
    <>
      <h2>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer