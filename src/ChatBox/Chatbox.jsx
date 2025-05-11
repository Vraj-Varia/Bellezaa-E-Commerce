import React from "react";
import './Chatbox.css'

const Chatbox = () => {


  const getMessage = async () => {
    const options = {
      method: 'POST',
      body : JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <div className="Chatbox">
      <div className="bottom">
        COPYRIGHT &copy; 2024 BELLEZAA. ALL RIGHTS RESERVED.
        {/* <div className="chat">
          <div className="user_input">
            <span>How to get rid of acne?</span>
          </div>
          <div className="response">
            <span>Over-the-Counter Treatments: Use products containing ingredients like salicylic acid, benzoyl peroxide, or sulfur. These ingredients help reduce oil, unclog pores, and kill bacteria that cause acne. Apply these products as directed, usually once or twice daily.</span>
          </div>
        </div> */}

        {/* <div className="form-container">
          <input
            type="text"
            name="search"
            id="searchFooter"
            placeholder="Search here..."
          />
          <button onClick={getMessage}>
            <svg
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </button>
        </div> */}

        <div className="suggetions">
          <button>How often should I cleanse my face?</button>
          <button>What products are essential for a skincare routine?</button>
          <button>Which products are best for my skin type?</button>
          <button>which are the best product for my hairs?</button>
          <button>Best Gifts for Women</button>
          <button>Best Gifts for Men</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
