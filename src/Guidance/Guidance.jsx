import React from "react";
import "./Guidance.css";
import SmallCard from "./SmallCard";

const Guidance = () => {
  return (
    <div className="container">
      <div className="divider"></div>
      <div className="needHelp">
        <div className="heading">
          <h1>Need a Little Guidance?</h1>
          <p>Check out what's popular now.</p>
        </div>
        <div className="cards">
          <SmallCard title="Serums and Moisturizers" />
          <SmallCard title="Eyeliner, Kajal, Mascara" />
          <SmallCard title="Trending on social media" />
          <SmallCard title="Awesome Sales" />
          <SmallCard title="Hair Care Products" />
          <SmallCard title="Indian Brands" />
          <SmallCard title="Gifts and Combos" />
          <SmallCard title="Bellezza Gallery" />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Guidance;
