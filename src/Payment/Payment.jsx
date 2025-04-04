import React from "react";
import "./Payment.css";
import QR from '../assets/QR.jpg'

const Payment = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="payment">
        <section className="upi_method">
          <img src={QR} alt="" />
          <form action="">
            <input type="text" placeholder="upi id"/>
          <input type="submit" value="Proceed" className="submit_pay" />
          </form>
        </section>
        <div className="vertical_divider"></div>
        <div className="do_pay">
          <div className="card_pay">
            <h1 className="heading">Debit / Credit Card</h1>
            <form action="">
              <input type="text" placeholder="XXXX - XXXX - XXXX - XXXX" id="card_number"/>
              <input type="text" placeholder="Card Holder Name" id="card_holder_name"/>
              <input type="text" placeholder="CVV" id="cvv"/>
              <input type="text" id="expire_date" placeholder="MM / YY" />
              <input type="submit" value="Pay" className="submit_pay"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
