import React from 'react'
import Card from './card'
import productImg1 from '../assets/lipstick1.png'
import productImg2 from '../assets/lipstick2.png'
import productImg3 from '../assets/lipstick3.png'
import productImg4 from '../assets/faceSerum.png'
import './sellingcard.css'

const BestSelling = () => {
  return (
    <div className='BestSelling'>
      <h1 className="heading">Best Selling Products</h1>
      <div className="cardContainer">
        <Card img={productImg1} name="Lips Stick" price="Rs. 200"/>
        <Card img={productImg2} name="Lips Stick" price="Rs. 800"/>
        <Card img={productImg3} name="Nivia Lips Stick" price="Rs. 300"/>
        <Card img={productImg4} name="face Serum" price="Rs. 100"/>
      </div>
    </div>
  )
}

export default BestSelling