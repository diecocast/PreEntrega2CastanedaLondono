import React from 'react'
import { useState } from 'react'


const ItemCount = () => {
    const [numero, setNumero] = useState(0)
  return (
    <div>
      <button type="button" className="btn btn-success" onClick={() => setNumero(numero +1)}>+</button>{numero}
      <button type="button" className="btn btn-success" onClick={() => setNumero(numero -1)}>-</button>
      <button type="button" className="btn btn-danger" onClick={() => setNumero(0)}>Reiniciar</button><br /> <br />
      <button type="button" className="btn btn-info">Add Cart</button>
    </div>
  )
}

export default ItemCount