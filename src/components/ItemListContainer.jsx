import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,description,category,thumbnail')
      .then(response => response.json())
      .then(json => setProducts(json.products))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className ="media-body">
        <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer