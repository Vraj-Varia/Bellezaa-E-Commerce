import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import customers from '../assets/3e.png'

const Services = () => {
  return (
    <>
      <div className='divider'></div>
      <div className='ServicesContainer'>
        <div className="left">
          <h1><i>Explore the latest cosmatic products at our online store! Shop the best makeup and skincare products online by Bellezaa.</i></h1>
        </div>
        <div className="right">
          <ServiceCard image={customers} />
        </div>
      </div>
    </>
  )
}

export default Services