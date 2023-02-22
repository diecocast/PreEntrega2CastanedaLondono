import React from 'react'
import '../css/style.css'

const CartWidget = () => {
  return (
    <div className="cart-container">					
        <div className="dropdown cart-nav dropdown-slide">
            <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
            className="tf-ion-android-cart"></i><img src="/src/img/icons/cart.png" alt="Cart" /></a>
            <div id="itemsCart" className="dropdown-menu cart-dropdown">
            </div>      
        </div>
    </div>
  )
}

export default CartWidget
