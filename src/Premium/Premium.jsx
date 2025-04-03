import React from "react";
import "./Premium.css";

const Premium = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="heading">
        <p>Pricing</p>
        <h1>
          Choose The Perfect Plan
          <br />
          For Your Health.
        </h1>
      </div>
      <div id="container">
        <div className="card">
          <p>FREE</p>
          <div className="price">
            <h1>$0</h1>
            <button>Sign Up</button>
          </div>
          <div className="details">
            <h2>Free Plan Indicates :</h2>
            <li>Viewing Product Details</li>
            <li>Viewing Ingredients of Product</li>
            <li>Asking 5 Free Questions</li>
          </div>
        </div>
        <div className="card">
          <p>MONTHLY</p>
          <div className="price">
            <h1>$49</h1>
            <button>Purchase Now</button>
          </div>
          <div className="details">
            <h2>Monthly Plan Indicates :</h2>
            <li>Viewing Product Details</li>
            <li>Viewing Ingredients of Product</li>
            <li>Asking 5 Free Questions</li>
          </div>
        </div>
        <div className="card">
          <p>YEARLY</p>
          <div className="price">
            <h1>$299</h1>
            <button>Purchase Now</button>
          </div>
          <div className="details">
            <h2>Yearly Plan Indicates :</h2>
            <li>Viewing Product Details</li>
            <li>Viewing Ingredients of Product</li>
            <li>Asking 5 Free Questions</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
