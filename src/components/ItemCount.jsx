import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ItemCount = ({stock}) => {
    const [numero, setNumero] = useState(1)
  return (
    <div>
      <button type="button" className="btn btn-success" onClick={() => numero === stock ? (Swal.fire({title: `${stock} es el maximo de productos disponibles`, icon: 'error'})):(setNumero(numero + 1 ))}>+</button>
      {numero}
      <button type="button" className="btn btn-success" onClick={() => numero === 1 ? (Swal.fire({title: 'Esta es la cantidad minima', icon: 'error'})):(setNumero(numero - 1 ))}>-</button>
      <button type="button" className="btn btn-danger" onClick={() => setNumero(1)}>Reiniciar</button><br /> <br />
      <button type="button" className="btn btn-info">Add Cart</button>
    </div>
  )
}

export default ItemCount