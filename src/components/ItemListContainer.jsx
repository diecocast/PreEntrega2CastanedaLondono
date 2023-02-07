import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div class="media-body">
        <h4 class="media-heading"><a href="#!">{greeting}</a></h4>
    </div>
  )
}

export default ItemListContainer