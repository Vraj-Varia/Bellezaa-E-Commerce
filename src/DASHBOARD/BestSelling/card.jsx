import React from 'react'
import './sellingcard.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="productName">{props.name}</div>
      <div className="productPrice">{props.price}</div>
    </div>
  )
}

export default Card