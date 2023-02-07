import React from 'react'
import '../css/style.css'
import ItemListContainer from './ItemListContainer'
const CartWidget = () => {
  return (
    <div class="cart-container">					
        <li class="dropdown cart-nav dropdown-slide">
            <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
            class="tf-ion-android-cart"></i><img src="/src/img/icons/cart.png" alt="Cart" /></a>
            <div id="itemsCart" class="dropdown-menu cart-dropdown"><ItemListContainer greeting={"Hola Mundo"}>
              </ItemListContainer>
            </div>      
        </li>
    </div>
  )
}

export default CartWidget