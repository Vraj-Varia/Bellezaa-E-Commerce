import React from 'react'
import './Support.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Support = () => {
  return (
    <>
      <div className='adjustEverything'>
        <div className='Support'>
          <h1 className='title'>Support</h1>
          <div className="separator"></div>
          <form action="#" method="get">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="text" name="phone" id="phone" placeholder='Phone' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="text" name="Address" id="address" placeholder='Address' />
            <input type="text" name="province" id="province" placeholder='Province' />
            <input type="text" name="country" id="country" placeholder='Country' />
            <textarea name="message" id="message" placeholder='Message...'></textarea>
            <button>Contact us</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Support