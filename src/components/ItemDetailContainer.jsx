import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [product, setProduct] = useState(null);

    useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(json => setProduct(json))
        .catch(error => console.error(error));
    }, []);
  return (
    <div>
         {product === null ? (
        <div id="contenedor">
          <div className="contenedor-loader">
            <div className="loader"></div>
          </div>
          <div className="cargando">Cargando...</div>
        </div>
      ) : (
        <ItemDetail product = {product}/>
      )}
    </div>
  )

}
export default ItemDetailContainer