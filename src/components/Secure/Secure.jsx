import React from "react";
import "./secure.css";
import MyIcon from "../../assets/Return";
import PlayIcon from "../../assets/Shipping";
import ShieldCheckIcon from "../../assets/Payment";
import HouseIcon from "../../assets/Gift";
const Secure = () => {
  return (
    <div className="secure">
      <div className="policies">
        <div className="box">
          <PlayIcon />
          <p>Very Fast Shipping</p>
        </div>
        <div className="box">
          <ShieldCheckIcon />
          <p>Secure Payments</p>
        </div>
        <div className="box">
          <MyIcon />
          <p>Hassle-Free Returns</p>
        </div>
        <div className="box">
          <HouseIcon />
          <p>Gift-Ready Pacakging</p>
        </div>
      </div>
    </div>
  );
};

export default Secure;
