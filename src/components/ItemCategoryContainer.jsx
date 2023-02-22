import React from 'react'
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemCategoryContainer = () => {
    const {id} = useParams()
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch(`https://dummyjson.com/products/category/${id}`)
        .then(response => response.json())
        .then(json => setProducts(json.products))
        .catch(error => console.error(error));
    }, [id]);

  return (
    <div className="media-body">
        <ItemList products = {products}/>
    </div>
  )
}

export default ItemCategoryContainer