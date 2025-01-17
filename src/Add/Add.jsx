import React from "react";
import "./Add.css";
import LiquidLiner3 from "../assets/gift.png";

const Add = (props) => {
  return (
    <>
      <div className="Add">
        <div className="imgSection">
          <img src={props.img} alt="" />
        </div>
        <div className="textSection">
          <h3>{props.category}/</h3>
          <h1>{props.title}</h1>
          <h2>{props.msg}</h2>
          <button>SHOP</button>
        </div>
      </div>
    </>
  );
};

export default Add;
