import React, { useEffect, useState } from "react";
import "./Products.css";
import Cards from "./Cards";
import serum from "../assets/faceSerum.png";
import oil from "../assets/faceOil.png";
import tonor from "../assets/faceToner.png";
import moisturizer from "../assets/moisturizer.png";
import ExfoliatingGrain from "../assets/ExfoliatingGrain.png";
import lip1 from "../assets/lipstick1.png";
import lip2 from "../assets/lipstick2.png";
import lip3 from "../assets/lipstick3.png";

const Products = () => {
  return (
    <div className="Products">
      <div className="CardContainer">
        <Cards
          title="Face Serum"
          img={serum}
          description="Plum 10% Niacinamide Face Serum With Rice Water & Squalane (10ml)"
          price="300"
        />

        <Cards
          title="Face Oil"
          img={oil}
          description="Plum Grape Seed & Sea Buckthorn Glow-Restore Face Oil Blend, 30ml"
          price="400"
        />
        <Cards
          title="Face Toner"
          img={tonor}
          description="Plum 10% Niacinamide Face Serum With Rice Water & Squalane (10ml)"
          price="700"
        />
        <Cards
          title="Moisturizer"
          img={moisturizer}
          description="Plum 10% Niacinamide Face Serum With Rice Water & Squalane (10ml)"
          price="1350"
        />
        <Cards
          title="Exfoliating"
          img={ExfoliatingGrain}
          description="Plum 10% Niacinamide Face Serum With Rice Water & Squalane (10ml)"
          price="499"
        />
        <Cards
          title="Maybelline Super Stay Matte Ink Liquid Lipstick Makeup"
          img={lip1}
          description="Iconic Longwear Formula"
          price="400"
        />
        <Cards
          title="Revlon Super Lustrous Lipstick"
          img={lip2}
          description="YOUR FAVORITE LIP MAKEUP"
          price="3,000"
        />
        <Cards
          title="LAURA GELLER NEW YORK Modern Classic Lipstick - Pink Passion"
          img={lip3}
          description="MODERN CLASSIC LIPSTICK"
          price="4,500"
        />
      </div>
    </div>
  );
};

export default Products;
