import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.thumbnail} alt="product image"/>
      </div>
      <div className="product-card-content">
        <h2 className="product-card-title">{product.title}</h2>
        <h3 className="product-card-price">$ {product.price}</h3>
        <Link to={`/item/${product.id}`}><button type="button" className="btn btn-primary">Detalles</button></Link>
      </div>
    </div>

  )
}

export default Item