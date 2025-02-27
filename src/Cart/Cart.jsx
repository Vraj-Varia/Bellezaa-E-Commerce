import React from 'react'
import './Cart.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CartCard from './CartCard'

const Cart = () => {
  return (
    <div className='Cart'>
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  )
}

export default Cart