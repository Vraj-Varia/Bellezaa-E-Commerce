import React from 'react'
import './items.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import productImage from '../Items/image.png'

const Items = () => {
  return (
    <div className='itemsContainer'>
        {/* <Navbar /> */}
        <div className="description_container">
          <div className="upperSection">
            <div className="imageSection">
              <img src={productImage} alt="" />
            </div>
            <div className="descriptionSection">
              <h1>Face Serum</h1>
              <p>Our face serum is a lightweight, non-greasy serum that helps to reduce</p>
              <p>fine lines and wrinkles, while also improving skin elasticity and firmness.</p>
              <h1 className='mrp'>MRP: <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z"/></svg><span>200</span></h1>
              <div className="cartSection">
                <button className='cartBtn'>Add to Cart</button>
                <button className='buyBtn'>Buy Now</button>
                <button className='wishBtn'>
                  <svg height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lowerSection">
            <div className="instructions">
              <p>
                <h1>Sample Instructions for a Face Serum:</h1>
                <ol>
                  <li>Wash your face with a gentle cleanser and pat it dry with a soft towel.</li>
                  <li>Dispense 2-3 drops of the serum onto your fingertips or palm.</li>
                  <li>Gently apply it to your face and neck using upward motions.</li>
                  <li>Use circular motions to help the serum absorb into the skin. Avoid the eye area unless the product is specifically for that purpose.</li>
                  <li>After the serum absorbs, apply a moisturizer to lock in hydration.</li>
                  <li>For best results, use the serum once or twice daily, preferably in the morning and evening.</li>
                </ol>
              </p>
            </div>
            <div className="chemicalComposition"></div>
            <div className="paymentMode"></div>
          </div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Items