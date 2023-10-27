import { useState, useEffect } from "react"
import {getSingleProduct} from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

const [producto, setProducto] = useState(null);

const {idItem} = useParams()

    useEffect (()=> {

        getSingleProduct(idItem)
        .then (respuesta => setProducto (respuesta))
    }, [idItem])

  return (
    <div>

            <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer