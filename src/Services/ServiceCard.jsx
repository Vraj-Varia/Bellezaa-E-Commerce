import React from 'react'
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default ServiceCard