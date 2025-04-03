import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";
import Products from "../Products/Products";
import Add from "../Add/Add";
import Footer from "../Footer/Footer";
import "./abc.css";
import Guidance from "../Guidance/Guidance";
import image from '../assets/discount.png'
// import image from '../assets/background.png'
import holiday from '../assets/HolidayGiftGuide.png'
import Services from "../Services/Services";

const ActualHome = () => {
  return (
    <div>
      {/* <br/>
      <br/>
      <br/> */}
      {/* <Home /> */}
      {/* <Products /> */}
      <Services />
      <Guidance />
      {/* <Products /> */}
      <Add category="NEW" title="BUY PREMIUM NOW AND GET 20% OFF" msg="Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments." img={image}/>
      <Products />
      {/* <div className="divider"></div> */}
      {/* <Products /> */}
      <Add category="HOLIDAY" title="HOLIDAY GIFT'S" msg="Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments." img={holiday}/>
      <Products />

      <div className="cartButton"></div>
    </div>
  );
};

export default ActualHome;
